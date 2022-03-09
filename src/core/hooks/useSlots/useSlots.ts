import {
  useMemo, Children, isValidElement, ReactElement,
} from 'react'

// TODO move to ./interface/index.ts
type CollectionType = {
  content: ReactElement[],
  [slot: string]: ReactElement[] | ReactElement
}

interface Slots {
  children?: ReactElement[] | ReactElement
}

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
