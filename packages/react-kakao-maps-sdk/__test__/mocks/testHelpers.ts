import { MockInstancesRegistry } from "./kakaoMapsMock"

type TestConstructor = { readonly prototype: object }

type MockGlobal = {
  __kakaoMock?: {
    mockInstances: MockInstancesRegistry
  }
}

export const getMockInstances = <T extends object>(
  ctor: TestConstructor,
): T[] => {
  const testGlobal = globalThis as unknown as MockGlobal
  return testGlobal.__kakaoMock?.mockInstances?.get(ctor) ?? []
}
