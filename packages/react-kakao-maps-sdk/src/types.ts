import React from "react"

type AsProp<T extends React.ElementType> = {
  as?: T
}

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"]

export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props extends object,
> = AsProp<T> &
  Omit<
    React.ComponentPropsWithoutRef<T> & {
      ref?: PolymorphicRef<T>
    },
    keyof Props
  > &
  Props

export type PolymorphicComponentPropsWithOutRef<
  T extends React.ElementType,
  Props extends object,
> = AsProp<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props> & Props

/**
 * React18 버전부터 ReactElement가 아닌 ReactNode로 변경됨.
 * 이에 따른 컨디셔널하게 타입추론이 가능하도록 더미 Type 정의
 */
export interface OldReactExoticComponent<P = object> {
  (props: P): React.ReactElement | null
  readonly $$typeof: symbol
}

export type CompatibleReactElement =
  React.ExoticComponent extends OldReactExoticComponent
    ? React.ReactElement
    : React.ReactNode
