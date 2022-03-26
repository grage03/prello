import { useEffect, useState } from 'react'
import { debounce } from '../../lib/utilities/functions'

export const useScroll = () => {
  const [ position, setPosition ] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handler = debounce(() => {
      setPosition((prevPosition) => {
        const { pageXOffset, pageYOffset } = window
        return prevPosition.x !== pageXOffset || prevPosition.y !== pageYOffset
          ? {
            x: pageXOffset,
            y: pageYOffset,
          }
          : prevPosition
      })
    }, 100)
    window.addEventListener('scroll', handler)

    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])

  return position
}
