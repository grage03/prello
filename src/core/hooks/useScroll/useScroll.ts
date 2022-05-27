import { useEffect, useState } from 'react'
import { debounce } from '../../lib/utilities/functions'
import { useMatchMedia } from '../useMatchMedia'

export const useScroll = () => {
  const [ position, setPosition ] = useState({
    x: 0,
    y: 0,
  })
  const { isMobile } = useMatchMedia()

  useEffect(() => {
    if (isMobile) return

    let mounted = true
    const handler = (debounce(() => {
      if (!mounted) return
      setPosition((prevPosition) => {
        const { pageXOffset, pageYOffset } = window
        return prevPosition.x !== pageXOffset || prevPosition.y !== pageYOffset
          ? {
            x: pageXOffset,
            y: pageYOffset,
          } : prevPosition
      })
    }, 100))
    window.addEventListener('scroll', handler)

    return () => {
      mounted = false
      window.removeEventListener('scroll', handler)
    }
  }, [])

  return {
    ...position,
    isMobile,
  }
}
