import { RefObject, useEffect, useState } from 'react'
import { IPosition, IUsePositionReturn } from './interface'

// bottom: 352.9375
// height: 66
// left: 116.80000305175781
// right: 1076.8000030517578
// top: 286.9375
// width: 960
// x: 116.80000305175781
// y: 286.9375

export const usePosition = (ref: RefObject<HTMLElement>): IUsePositionReturn => {
  const [ position, setPosition ] = useState<IPosition>({
    x: 0,
    y: 0,
    position: null,
  })

  useEffect(() => {
    if (ref.current) {
      setPosition({
        x: ref.current.scrollLeft,
        y: ref.current.scrollTop,
        position: ref.current.getBoundingClientRect(),
      })
    }
  }, [])

  return position
}
