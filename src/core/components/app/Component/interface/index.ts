export interface ComponentProps<T> {
  element: string
  value: string
  props: {
    [key: string]: T
  } | null
}
