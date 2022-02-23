import React from 'react'

import '../../../assets/styles/_helpers.sass'

import { PublicHelp, PublicReviews, SecondBlock } from './components'

export const PublicPage = () => {
  return (
    <div className="h-container">
      <PublicHelp />
      <PublicReviews />
      <SecondBlock />
    </div>
  )
}
