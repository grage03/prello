import { useLayoutEffect, useState } from 'react'
import { IUseMatchMediaReturn } from './interface'

const screenSize = [
  "(max-width: 579px)",
  "(min-width: 580px) and (max-width: 1215px)",
  "(min-width: 1216px)",
]

export const useMatchMedia = (): IUseMatchMediaReturn => {
  const mediaQueryList = screenSize.map((query) => matchMedia(query))
  const getScreenSizes = () => mediaQueryList.map(({ matches }) => matches)

  const [ sizes, setSizes ] = useState(getScreenSizes)

  useLayoutEffect(() => {
    const updateSizeStatus = () => setSizes(getScreenSizes)

    mediaQueryList.forEach((query) => query.addEventListener("change", updateSizeStatus))

    return () => {
      mediaQueryList.forEach((query) => query.removeEventListener("change", updateSizeStatus))
    }
  }, [])

  return {
    isMobile: sizes[0],
    isTablet: sizes[1],
    isDesktop: sizes[2],
  }
}
