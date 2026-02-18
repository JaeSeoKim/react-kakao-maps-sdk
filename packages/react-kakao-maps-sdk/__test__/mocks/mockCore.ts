import { jest } from "@jest/globals"

type Constructor = { readonly prototype: object }
type MockableFunction<
  TReturn = unknown,
  TArgs extends readonly unknown[] = readonly unknown[],
> = (...args: TArgs) => TReturn

export function createMock<
  TReturn = unknown,
  TArgs extends readonly unknown[] = readonly unknown[],
>(
  impl?: (...args: TArgs) => TReturn,
): jest.MockedFunction<MockableFunction<TReturn, TArgs>>
export function createMock<T extends (...args: unknown[]) => unknown>(
  impl?: T,
): jest.MockedFunction<MockableFunction<ReturnType<T>, Parameters<T>>>
export function createMock(impl?: (...args: readonly unknown[]) => unknown) {
  return impl ? (jest.fn(impl) as unknown) : (jest.fn() as unknown)
}

export class MockInstancesRegistry {
  private registry = new Map<Constructor, object[]>()

  add<T extends object>(ctor: Constructor, instance: T) {
    const list = this.registry.get(ctor)
    if (list) list.push(instance)
    else this.registry.set(ctor, [instance])
  }

  get<T>(ctor: Constructor): T[] {
    return (this.registry.get(ctor) ?? []) as T[]
  }

  clearAll() {
    this.registry.clear()
  }

  clear(...ctors: Constructor[]) {
    ctors.forEach((ctor) => this.registry.delete(ctor))
  }
}

export const mockInstances = new MockInstancesRegistry()

export const createRoot = (kind: string) => {
  const root = document.createElement("div")
  root.setAttribute("data-kakao-mock", kind)
  return root
}
