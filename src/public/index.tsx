import React, { ReactElement } from 'react'
import { CollectionType, useSlots } from '../core/hooks/useSlots/useSlots'

interface PublicPageProps {
  children: ReactElement[] | ReactElement
}

const PublicPage = ({ children }: PublicPageProps) => {
  const slots: CollectionType = useSlots({ children })
  return (
    <div>
      {slots.header}
      <aside>Public page</aside>
      {slots.content}
    </div>
  )
}

export default PublicPage