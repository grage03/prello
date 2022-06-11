export interface ISelectProps {
  label?: string,
  selectItems: string[],
  // TODO: move to type
  onClickItem(item: string): void
  customAttributes: object
}
