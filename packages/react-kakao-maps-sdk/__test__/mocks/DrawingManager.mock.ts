import { createMock, mockInstances } from "./mockCore"

type Listener = (...args: readonly unknown[]) => void
type Dictionary = Record<string, unknown>

export class DrawingManager {
  public setStyle = createMock()
  public setStrokeWeight = createMock()
  public setStrokeColor = createMock()
  public select = createMock()
  public cancel = createMock()
  public undo = createMock()
  public redo = createMock()
  public undoable = createMock<unknown, []>(() => false)
  public redoable = createMock<unknown, []>(() => false)
  public getData = createMock(() => ({}))
  public getOverlays = createMock(() => ({}))
  public put = createMock()
  public remove = createMock()
  public setConstructorOptions = createMock<void, [Dictionary]>()

  public addListener = createMock<void, [string, Listener]>((type, handler) => {
    window.kakao.maps.event.addListener(this, type, handler)
  })

  public removeListener = createMock<void, [string, Listener]>(
    (type, handler) => {
      window.kakao.maps.event.removeListener(this, type, handler)
    },
  )

  constructor(opts: Dictionary = {}) {
    this.setConstructorOptions(opts)
    mockInstances.add(DrawingManager, this)
  }
}
