export interface ComponentProps<T> {
  element: 'div'
  value: string
  props: {
    [key: string]: T
  } | null
}
