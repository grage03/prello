import { RefObject } from 'react'

export interface IUseClickOutsideReturn<T extends HTMLDivElement> {
  element: RefObject<T>
  isOpen: boolean
  setIsOpen: SetIsOpenType
}

type SetIsOpenType = (value: boolean) => void
