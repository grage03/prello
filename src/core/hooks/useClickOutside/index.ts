import { RefObject, useEffect, useState } from 'react'

export const useClickOutside = <T extends HTMLElement = HTMLElement>(visible: boolean, element: RefObject<T>) => {
  const [ isOpen, setIsOpen ] = useState(visible)

  // TODO: remove any and add type for event
  const onClickOutside = (event: any) => {
    if (element.current && element.current.contains(event.target as Node)) {
      return
    }

    setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener('click', onClickOutside, true)

    return () => {
      document.removeEventListener('click', onClickOutside, true)
    }
  }, [ isOpen ])

  return { isOpen, setIsOpen }
}
