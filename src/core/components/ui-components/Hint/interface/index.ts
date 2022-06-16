import { ReactElement } from 'react'

export interface IHintProps {
  children: ChildrenType
  title?: string
  description: string
}

type ChildrenType = ReactElement | ReactElement[]
