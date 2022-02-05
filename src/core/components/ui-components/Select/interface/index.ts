export interface SelectProps {
  label?: string,
  selectItems: string[],

  onClickItem(item: string): void
}