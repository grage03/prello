import { RefObject } from 'react'

export interface IUseClickOutsideReturn<T extends HTMLDivElement> {
  isOpen: boolean
  setIsOpen: SetIsOpenType
  element: RefObject<T>
}

type SetIsOpenType = (value: boolean) => void
