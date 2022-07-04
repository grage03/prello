export interface IComponentProps<T> {
  element: 'div'
  props: IProps<T> | null
  value: string
}

interface IProps<T> {
  [key: string]: T
}
