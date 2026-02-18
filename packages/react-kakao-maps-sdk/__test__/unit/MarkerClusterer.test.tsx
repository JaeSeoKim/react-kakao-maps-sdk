import { expect, jest, test } from "@jest/globals"
import { act, render, waitFor } from "@testing-library/react"
import { StrictMode } from "react"

import { CustomOverlayMap, Map, MapMarker, MarkerClusterer } from "../../src"
import {
  initializeKakaoMock,
  KakaoMap,
  MarkerClusterer as MockMarkerClusterer,
} from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

type ClustererMockInstance = InstanceType<typeof MockMarkerClusterer>

const getMarkerClustererInstances = () =>
  getMockInstances<ClustererMockInstance>(MockMarkerClusterer)

const clearMarkerClustererMutationCalls = (
  instances: Array<ClustererMockInstance>,
) => {
  instances.forEach((instance) => {
    instance.addMarker.mockClear()
    instance.removeMarker.mockClear()
    instance.redraw.mockClear()
  })
}

const getLastInvocationOrder = (orders: number[]) =>
  orders.length > 0 ? Math.max(...orders) : 0

const getLastRedrawOrder = (instance: ClustererMockInstance) =>
  getLastInvocationOrder(instance.redraw.mock.invocationCallOrder)

const findClustererWithLatestRedraw = () => {
  const redrawClusterers = getMarkerClustererInstances().filter(
    (instance) => instance.redraw.mock.calls.length > 0,
  )

  return redrawClusterers.sort(
    (left, right) => getLastRedrawOrder(right) - getLastRedrawOrder(left),
  )[0]
}

const expectFinalRedrawAfterMutations = (instance: ClustererMockInstance) => {
  const mutationOrders = [
    ...instance.addMarker.mock.invocationCallOrder,
    ...instance.removeMarker.mock.invocationCallOrder,
  ]
  const lastRedrawOrder = getLastRedrawOrder(instance)

  expect(lastRedrawOrder).toBeGreaterThan(0)
  if (mutationOrders.length > 0) {
    expect(lastRedrawOrder).toBeGreaterThan(Math.max(...mutationOrders))
  }
}

test("MarkerClusterer creates instance and sets map on mount", async () => {
  // Arrange
  const onCreate = jest.fn()

  // Act
  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MarkerClusterer
        onCreate={onCreate}
        averageCenter={true}
        minClusterSize={5}
      />
    </Map>,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
    expect(getMockInstances(window.kakao.maps.MarkerClusterer).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  const [clusterer] =
    getMockInstances<InstanceType<typeof MockMarkerClusterer>>(
      MockMarkerClusterer,
    )

  // Assert
  expect(clusterer.setMap).toHaveBeenCalledWith(map)
  expect(onCreate).toHaveBeenCalledWith(clusterer)
})

test("MarkerClusterer update calls cluster config setters", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MarkerClusterer minClusterSize={2} texts={["one", "two"]} />
    </Map>,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.MarkerClusterer).length).toBe(1)
  })

  const [clusterer] =
    getMockInstances<InstanceType<typeof MockMarkerClusterer>>(
      MockMarkerClusterer,
    )

  // Assert
  await waitFor(() => {
    expect(clusterer.setMinClusterSize).toHaveBeenCalledWith(2)
    expect(clusterer.setTexts).toHaveBeenCalledWith(["one", "two"])
  })

  clusterer.setMinClusterSize.mockClear()
  clusterer.setTexts.mockClear()

  // Act
  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MarkerClusterer minClusterSize={10} texts={["new", "one"]} />
    </Map>,
  )

  await waitFor(() => {
    expect(clusterer.setMinClusterSize).toHaveBeenCalledWith(10)
    expect(clusterer.setTexts).toHaveBeenCalledWith(["new", "one"])
  })
})

test("MarkerClusterer children changes trigger redraw", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MarkerClusterer>
        <MapMarker position={{ lat: 33.450701, lng: 126.570667 }} />
      </MarkerClusterer>
    </Map>,
  )

  // Assert
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.MarkerClusterer).length).toBe(1)
    expect(getMockInstances(window.kakao.maps.Marker).length).toBe(1)
  })

  const [clusterer] =
    getMockInstances<InstanceType<typeof MockMarkerClusterer>>(
      MockMarkerClusterer,
    )
  clusterer.redraw.mockClear()

  // Act
  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MarkerClusterer>
        <MapMarker position={{ lat: 33.450701, lng: 126.570667 }} />
        <MapMarker position={{ lat: 33.451701, lng: 126.571667 }} />
      </MarkerClusterer>
    </Map>,
  )

  // Assert
  await waitFor(() => {
    expect(clusterer.redraw).toHaveBeenCalled()
  })
})

test("MarkerClusterer warns and renders nothing when clusterer library is missing", async () => {
  // Arrange
  initializeKakaoMock({ libraries: { clusterer: false } })
  const warn = jest.spyOn(console, "warn").mockImplementation(() => {})

  // Act
  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MarkerClusterer>
        <MapMarker position={{ lat: 33.450701, lng: 126.570667 }} />
      </MarkerClusterer>
    </Map>,
  )

  // Assert
  await waitFor(() => {
    expect(warn).toHaveBeenCalled()
  })

  expect(getMockInstances(window.kakao.maps.MarkerClusterer).length).toBe(0)
  warn.mockRestore()
})

test("MarkerClusterer updates remaining cluster config setters", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MarkerClusterer
        gridSize={50}
        averageCenter={true}
        minLevel={2}
        calculator={[10, 100]}
        styles={[{ width: "32px" }]}
      />
    </Map>,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.MarkerClusterer).length).toBe(1)
  })

  const [clusterer] =
    getMockInstances<InstanceType<typeof MockMarkerClusterer>>(
      MockMarkerClusterer,
    )

  // Assert
  await waitFor(() => {
    expect(clusterer.setGridSize).toHaveBeenCalledWith(50)
    expect(clusterer.setAverageCenter).toHaveBeenCalledWith(true)
    expect(clusterer.setMinLevel).toHaveBeenCalledWith(2)
    expect(clusterer.setCalculator).toHaveBeenCalledWith([10, 100])
    expect(clusterer.setStyles).toHaveBeenCalledWith([{ width: "32px" }])
  })

  clusterer.setGridSize.mockClear()
  clusterer.setAverageCenter.mockClear()
  clusterer.setMinLevel.mockClear()
  clusterer.setCalculator.mockClear()
  clusterer.setStyles.mockClear()

  // Act
  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MarkerClusterer
        gridSize={70}
        averageCenter={false}
        minLevel={5}
        calculator={[50, 200]}
        styles={[{ width: "40px" }]}
      />
    </Map>,
  )

  // Assert
  await waitFor(() => {
    expect(clusterer.setGridSize).toHaveBeenCalledWith(70)
    expect(clusterer.setAverageCenter).toHaveBeenCalledWith(false)
    expect(clusterer.setMinLevel).toHaveBeenCalledWith(5)
    expect(clusterer.setCalculator).toHaveBeenCalledWith([50, 200])
    expect(clusterer.setStyles).toHaveBeenCalledWith([{ width: "40px" }])
  })
})

test("MarkerClusterer wires cluster events to callbacks", async () => {
  // Arrange
  const onClustered = jest.fn()
  const onClusterclick = jest.fn()

  // Act
  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MarkerClusterer
        onClustered={onClustered}
        onClusterclick={onClusterclick}
      />
    </Map>,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.MarkerClusterer).length).toBe(1)
  })

  const [clusterer] =
    getMockInstances<InstanceType<typeof MockMarkerClusterer>>(
      MockMarkerClusterer,
    )

  // Act
  const cluster = { size: 10 } as unknown as kakao.maps.Cluster
  act(() => {
    window.kakao.maps.event.trigger(clusterer, "clustered", [cluster])
    window.kakao.maps.event.trigger(clusterer, "clusterclick", cluster)
  })

  // Assert
  expect(onClustered).toHaveBeenCalledWith(clusterer, [cluster])
  expect(onClusterclick).toHaveBeenCalledWith(clusterer, cluster)
})

test("MarkerClusterer redraw is called after marker creation on marker list update", async () => {
  // Arrange
  const storesAtMount = [
    {
      name: "store-a",
      lat: 33.450701,
      lng: 126.570667,
    },
  ]
  const storesAfterExternalInteraction = [
    {
      name: "store-a",
      lat: 33.450701,
      lng: 126.570667,
    },
    {
      name: "store-b",
      lat: 33.451701,
      lng: 126.571667,
    },
  ]

  const renderClusteredStores = (
    stores: Array<{ name: string; lat: number; lng: number }>,
  ) => (
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MarkerClusterer averageCenter={true} minLevel={5}>
        {stores.map((store) => (
          <MapMarker
            key={`${store.name}-${store.lat}-${store.lng}`}
            position={{ lat: store.lat, lng: store.lng }}
            title={store.name}
          />
        ))}
      </MarkerClusterer>
    </Map>
  )

  const { rerender } = render(renderClusteredStores(storesAtMount))

  await waitFor(() => {
    expect(
      getMockInstances(window.kakao.maps.MarkerClusterer).length,
    ).toBeGreaterThanOrEqual(1)
    expect(
      getMockInstances(window.kakao.maps.Marker).length,
    ).toBeGreaterThanOrEqual(1)
  })

  const clusterer =
    getMockInstances<InstanceType<typeof MockMarkerClusterer>>(
      MockMarkerClusterer,
    ).at(-1)

  expect(clusterer).toBeDefined()

  clusterer!.addMarker.mockClear()
  clusterer!.redraw.mockClear()

  // Act
  rerender(renderClusteredStores(storesAfterExternalInteraction))

  // Assert
  await waitFor(() => {
    expect(clusterer!.addMarker).toHaveBeenCalledWith(expect.any(Object), true)
    expect(clusterer!.redraw).toHaveBeenCalled()
  })

  expectFinalRedrawAfterMutations(clusterer!)
})

test("MarkerClusterer guarantees redraw after marker add", async () => {
  // Arrange
  const storesAtMount = [
    { id: "a", name: "store-a", lat: 33.450701, lng: 126.570667 },
  ]
  const storesAfterAdd = [
    { id: "a", name: "store-a", lat: 33.450701, lng: 126.570667 },
    { id: "b", name: "store-b", lat: 33.451701, lng: 126.571667 },
  ]

  const renderStrictStores = (
    stores: Array<{ id: string; name: string; lat: number; lng: number }>,
  ) => (
    <StrictMode>
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "320px", height: "240px" }}
      >
        <MarkerClusterer averageCenter={true} minLevel={5}>
          {stores.map((store) => (
            <MapMarker
              key={store.id}
              position={{ lat: store.lat, lng: store.lng }}
              title={store.name}
            />
          ))}
        </MarkerClusterer>
      </Map>
    </StrictMode>
  )

  const { rerender } = render(renderStrictStores(storesAtMount))

  await waitFor(() => {
    expect(
      getMockInstances(window.kakao.maps.MarkerClusterer).length,
    ).toBeGreaterThanOrEqual(1)
  })

  clearMarkerClustererMutationCalls(getMarkerClustererInstances())

  // Act
  rerender(renderStrictStores(storesAfterAdd))

  // Assert
  await waitFor(() => {
    expect(
      getMarkerClustererInstances().some(
        (instance) =>
          instance.addMarker.mock.calls.length > 0 &&
          instance.redraw.mock.calls.length > 0,
      ),
    ).toBe(true)
  })

  const clusterer = findClustererWithLatestRedraw()

  expect(clusterer).toBeDefined()
  expect(clusterer!.addMarker).toHaveBeenCalledWith(expect.any(Object), true)
  expect(clusterer!.redraw).toHaveBeenCalled()
  expectFinalRedrawAfterMutations(clusterer!)
})

test("MarkerClusterer guarantees redraw after marker remove", async () => {
  // Arrange
  const storesAtMount = [
    { id: "a", name: "store-a", lat: 33.450701, lng: 126.570667 },
    { id: "b", name: "store-b", lat: 33.451701, lng: 126.571667 },
  ]
  const storesAfterRemove = [
    { id: "a", name: "store-a", lat: 33.450701, lng: 126.570667 },
  ]

  const renderStrictStores = (
    stores: Array<{ id: string; name: string; lat: number; lng: number }>,
  ) => (
    <StrictMode>
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "320px", height: "240px" }}
      >
        <MarkerClusterer averageCenter={true} minLevel={5}>
          {stores.map((store) => (
            <MapMarker
              key={store.id}
              position={{ lat: store.lat, lng: store.lng }}
              title={store.name}
            />
          ))}
        </MarkerClusterer>
      </Map>
    </StrictMode>
  )

  const { rerender } = render(renderStrictStores(storesAtMount))

  await waitFor(() => {
    expect(
      getMockInstances(window.kakao.maps.MarkerClusterer).length,
    ).toBeGreaterThanOrEqual(1)
  })

  clearMarkerClustererMutationCalls(getMarkerClustererInstances())

  // Act
  rerender(renderStrictStores(storesAfterRemove))

  // Assert
  await waitFor(() => {
    expect(
      getMarkerClustererInstances().some(
        (instance) =>
          instance.removeMarker.mock.calls.length > 0 &&
          instance.redraw.mock.calls.length > 0,
      ),
    ).toBe(true)
  })

  const clusterer = findClustererWithLatestRedraw()

  expect(clusterer).toBeDefined()
  expect(clusterer!.removeMarker).toHaveBeenCalledWith(expect.any(Object), true)
  expect(clusterer!.redraw).toHaveBeenCalled()
  expectFinalRedrawAfterMutations(clusterer!)
})

test("MarkerClusterer redraw is called after custom overlay creation on overlay list update", async () => {
  // Arrange
  const overlaysAtMount = [{ id: "a", lat: 33.450701, lng: 126.570667 }]
  const overlaysAfterAdd = [
    { id: "a", lat: 33.450701, lng: 126.570667 },
    { id: "b", lat: 33.451701, lng: 126.571667 },
  ]

  const renderClusteredOverlays = (
    overlays: Array<{ id: string; lat: number; lng: number }>,
  ) => (
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MarkerClusterer averageCenter={true} minLevel={5}>
        {overlays.map((overlay) => (
          <CustomOverlayMap
            key={overlay.id}
            position={{ lat: overlay.lat, lng: overlay.lng }}
          >
            <div>{overlay.id}</div>
          </CustomOverlayMap>
        ))}
      </MarkerClusterer>
    </Map>
  )

  const { rerender } = render(renderClusteredOverlays(overlaysAtMount))

  await waitFor(() => {
    expect(getMarkerClustererInstances().length).toBeGreaterThanOrEqual(1)
    expect(
      getMockInstances(window.kakao.maps.CustomOverlay).length,
    ).toBeGreaterThanOrEqual(1)
  })

  clearMarkerClustererMutationCalls(getMarkerClustererInstances())

  // Act
  rerender(renderClusteredOverlays(overlaysAfterAdd))

  // Assert
  await waitFor(() => {
    expect(
      getMarkerClustererInstances().some(
        (instance) => instance.redraw.mock.calls.length > 0,
      ),
    ).toBe(true)
  })

  const clusterer = findClustererWithLatestRedraw()

  expect(clusterer).toBeDefined()
  expect(clusterer!.redraw).toHaveBeenCalled()
  expectFinalRedrawAfterMutations(clusterer!)
})

test("MarkerClusterer guarantees redraw after custom overlay add", async () => {
  // Arrange
  const overlaysAtMount = [{ id: "a", lat: 33.450701, lng: 126.570667 }]
  const overlaysAfterAdd = [
    { id: "a", lat: 33.450701, lng: 126.570667 },
    { id: "b", lat: 33.451701, lng: 126.571667 },
  ]

  const renderStrictOverlays = (
    overlays: Array<{ id: string; lat: number; lng: number }>,
  ) => (
    <StrictMode>
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "320px", height: "240px" }}
      >
        <MarkerClusterer averageCenter={true} minLevel={5}>
          {overlays.map((overlay) => (
            <CustomOverlayMap
              key={overlay.id}
              position={{ lat: overlay.lat, lng: overlay.lng }}
            >
              <div>{overlay.id}</div>
            </CustomOverlayMap>
          ))}
        </MarkerClusterer>
      </Map>
    </StrictMode>
  )

  const { rerender } = render(renderStrictOverlays(overlaysAtMount))

  await waitFor(() => {
    expect(getMarkerClustererInstances().length).toBeGreaterThanOrEqual(1)
  })

  clearMarkerClustererMutationCalls(getMarkerClustererInstances())

  // Act
  rerender(renderStrictOverlays(overlaysAfterAdd))

  // Assert
  await waitFor(() => {
    expect(
      getMarkerClustererInstances().some(
        (instance) =>
          instance.addMarker.mock.calls.length > 0 &&
          instance.redraw.mock.calls.length > 0,
      ),
    ).toBe(true)
  })

  const clusterer = findClustererWithLatestRedraw()

  expect(clusterer).toBeDefined()
  expect(clusterer!.addMarker).toHaveBeenCalledWith(expect.any(Object), true)
  expect(clusterer!.redraw).toHaveBeenCalled()
  expectFinalRedrawAfterMutations(clusterer!)
})

test("MarkerClusterer guarantees redraw after custom overlay remove", async () => {
  // Arrange
  const overlaysAtMount = [
    { id: "a", lat: 33.450701, lng: 126.570667 },
    { id: "b", lat: 33.451701, lng: 126.571667 },
  ]
  const overlaysAfterRemove = [{ id: "a", lat: 33.450701, lng: 126.570667 }]

  const renderStrictOverlays = (
    overlays: Array<{ id: string; lat: number; lng: number }>,
  ) => (
    <StrictMode>
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "320px", height: "240px" }}
      >
        <MarkerClusterer averageCenter={true} minLevel={5}>
          {overlays.map((overlay) => (
            <CustomOverlayMap
              key={overlay.id}
              position={{ lat: overlay.lat, lng: overlay.lng }}
            >
              <div>{overlay.id}</div>
            </CustomOverlayMap>
          ))}
        </MarkerClusterer>
      </Map>
    </StrictMode>
  )

  const { rerender } = render(renderStrictOverlays(overlaysAtMount))

  await waitFor(() => {
    expect(getMarkerClustererInstances().length).toBeGreaterThanOrEqual(1)
  })

  clearMarkerClustererMutationCalls(getMarkerClustererInstances())

  // Act
  rerender(renderStrictOverlays(overlaysAfterRemove))

  // Assert
  await waitFor(() => {
    expect(
      getMarkerClustererInstances().some(
        (instance) =>
          instance.removeMarker.mock.calls.length > 0 &&
          instance.redraw.mock.calls.length > 0,
      ),
    ).toBe(true)
  })

  const clusterer = findClustererWithLatestRedraw()

  expect(clusterer).toBeDefined()
  expect(clusterer!.removeMarker).toHaveBeenCalledWith(expect.any(Object), true)
  expect(clusterer!.redraw).toHaveBeenCalled()
  expectFinalRedrawAfterMutations(clusterer!)
})
