type AsProp<T extends React.ElementType> = {
  as?: T
}

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"]

export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = {}
> = AsProp<T> &
  Props &
  React.ComponentPropsWithoutRef<T> & {
    ref?: PolymorphicRef<T>
  }

export type PolymorphicComponentPropsWithOutRef<
  T extends React.ElementType,
  Props = {}
> = AsProp<T> & Props & React.ComponentPropsWithoutRef<T>
