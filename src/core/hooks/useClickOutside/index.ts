import {
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'

export const useClickOutside = <T extends HTMLDivElement>(visible: boolean) => {
  const [ isOpen, setIsOpen ] = useState(visible)
  const element: RefObject<T> = useRef(null)

  const onClickOutside = (event: Event) => {
    if (element.current && element.current.contains(event.target as Node)) return

    setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener('click', onClickOutside, true)

    return () => {
      document.removeEventListener('click', onClickOutside, true)
    }
  }, [ isOpen ])

  return { isOpen, setIsOpen, element }
}
