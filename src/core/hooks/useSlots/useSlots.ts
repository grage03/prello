import { useMemo, Children, isValidElement } from 'react'
import { CollectionType, Slots } from './interface'

export const useSlots = ({ children }: Slots): CollectionType => {
  return useMemo(() => {
    const collection: CollectionType = {
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
