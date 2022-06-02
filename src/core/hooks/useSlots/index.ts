import { useMemo, Children, isValidElement } from 'react'
import { IUseSlotsReturn, IUseSlotsProps, ICollection } from './interface'

export const useSlots = ({ children }: IUseSlotsProps): IUseSlotsReturn => {
  return useMemo(() => {
    const collection: ICollection = {
      content: [],
    }

    Children.forEach(children, (child) => {
      if (!isValidElement(child) || typeof child.key !== 'string') return

      switch (child.key) {
        case 'content':
          collection.content.push(child)
          break
        default:
          collection[child.key] = child
          break
      }
    })

    return collection
  }, [ children ])
}
