import { createRoot, mockInstances } from "./mockCore"

type Dictionary = Record<string, unknown>

export class Toolbox {
  private element: HTMLElement

  constructor(_opts: Dictionary = {}) {
    this.element = createRoot("drawing.Toolbox")
    mockInstances.add(Toolbox, this)
  }

  getElement() {
    return this.element
  }
}
