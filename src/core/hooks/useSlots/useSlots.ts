import {
  useMemo, Children, isValidElement, ReactElement,
} from 'react'

type CollectionType = {
  content: ReactElement[],
  header?: ReactElement,
  footer?: ReactElement,
  trigger?: ReactElement
}

interface Slots {
  children: ReactElement[] | ReactElement
}

export const useSlots = ({ children }: Slots): CollectionType => {
  return useMemo(() => {
    const collection: CollectionType = {
      content: [],
    }

    Children.forEach(children, (child) => {
      if (!isValidElement(child)) return

      switch (child.key) {
        case 'header':
          collection.header = child
          break
        case 'footer':
          collection.footer = child
          break
        case 'trigger':
          collection.trigger = child
          break
        default:
          collection.content.push(child)
          break
      }
    })

    return collection
  }, [ children ])
}
