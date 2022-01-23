import { useMemo, Children, isValidElement, ReactElement } from 'react'

export type CollectionType = {
  header?: ReactElement,
  content: ReactElement[],
  footer?: ReactElement
}

interface Slots {
  children: ReactElement[] | ReactElement
}

export const useSlots = ({ children }: Slots): CollectionType => {
  return useMemo(() => {
    const collection: CollectionType = {
      content: [],
    }

    Children.forEach(children, child => {
      if (!isValidElement(child)) return

      // TODO может быть переписать на collection[child.key] = child и в последующем удалить switch/case + content

      switch (child.key) {
        case 'header':
          collection.header = child
          break
        case 'footer':
          collection.footer = child
          break
        default:
          collection.content.push(child)
          break
      }
    })

    return collection
  }, [children])
}

