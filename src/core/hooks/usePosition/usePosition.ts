import { RefObject, useEffect, useState } from 'react'

export const usePosition = (ref: RefObject<HTMLElement>) => {
  const [ position, setPosition ] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    if (ref.current) {
      setPosition({
        x: ref.current.scrollLeft,
        y: ref.current.scrollTop,
      })
    }
  }, [])

  return position
}
