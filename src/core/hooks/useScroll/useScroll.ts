import { useEffect, useState } from 'react'
import { throttle } from '../../plugins/utilities/functions'

export const useScroll = () => {
  const [ position, setPosition ] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handler = () => {
      setPosition((prevPosition) => {
        const { pageXOffset, pageYOffset } = window
        return prevPosition.x !== pageXOffset || prevPosition.y !== pageYOffset
          ? {
            x: pageXOffset,
            y: pageYOffset,
          }
          : prevPosition
      })
    }
    window.addEventListener('scroll', throttle(handler, 200))

    // TODO: move to publicPage for fix bug
    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])

  return position
}
