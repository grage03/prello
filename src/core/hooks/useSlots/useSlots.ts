import { useMemo, Children, isValidElement, ReactElement } from 'react'
import exp from 'constants'

type CollectionType = {
  header: null | ReactElement,
  content: ReactElement[],
  footer: null | ReactElement
}

interface Slots {
  children: ReactElement
}

export const useSlots = (children: Slots) => {
  const slots = useMemo(() => {
    const collection: CollectionType = {
      header: null,
      content: [],
      footer: null
    }

    Children.forEach(children, child => {
      if (!isValidElement(child)) return

      switch(child.type) {
        case 'Header':
          collection.header = child
          break
        case 'Footer':
          collection.footer = child
          break
        default:
          collection.content.push(child)
          break
      }
    })
  }, [children])

  return slots
}

