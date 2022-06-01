import { ReactElement } from 'react'

export type CollectionType = {
  content: ReactElement[],
  [slot: string]: ReactElement[] | ReactElement
}

export interface Slots {
  children?: ReactElement[] | ReactElement
}
