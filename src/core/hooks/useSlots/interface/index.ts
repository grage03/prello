import { ReactElement } from 'react'

export interface IUseSlotsReturn {
  content: ReactElement[],
  [slot: string]: ChildrenType
}

export interface IUseSlotsProps {
  children?: ChildrenType
}

export interface ICollection extends IUseSlotsReturn {}

type ChildrenType = ReactElement[] | ReactElement
