export interface IComponentProps<T> {
  element: 'div'
  value: string
  props: {
    [key: string]: T
  } | null
}
