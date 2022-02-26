import React from 'react'

import '../../../assets/styles/_helpers.sass'

import { PublicAssessment, PublicHelp, PublicReviews, PublicSecond } from './components'

export const PublicPage = () => {
  return (
    <div className="h-container">
      <PublicHelp />
      <PublicReviews />
      <PublicAssessment />
      <PublicSecond />
    </div>
  )
}
