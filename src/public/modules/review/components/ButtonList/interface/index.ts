import { ReactElement } from 'react'

export interface IButtonList {
  currentItem: string
  setCurrentItem: (item: string) => void
  buttons: IButtonItem[]
}

interface IButtonItem {
  title: string
  description: string
  key: string
  icon?: ReactElement
}
