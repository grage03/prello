import React from 'react'

import '../../../assets/styles/_helpers.sass'

import { PublicHelp, PublicReviews } from './components'

export const PublicPage = () => {
  return (
    <div className="h-container">
      <PublicHelp />
      <PublicReviews />
    </div>
  )
}
