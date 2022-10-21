type AsProp<T extends React.ElementType> = {
  as?: T
}

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"]

export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props extends {}
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
  Props extends {}
> = AsProp<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props> & Props
