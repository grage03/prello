import { ReactElement } from 'react'

export interface IUiHintProps {
  children: ChildrenType
  title?: string
  description: string
}

type ChildrenType = ReactElement | ReactElement[]
