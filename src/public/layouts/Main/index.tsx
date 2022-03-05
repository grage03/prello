import React from 'react'

import '../../../assets/styles/_helpers.sass'

import {
  PublicAssessment,
  PublicHelp,
  PublicReviews,
  PublicReasons,
} from './components'

export const PublicPage = () => {
  return (
    <main className="h-container">
      <PublicHelp />
      <PublicReasons />
      <PublicReviews />
      <PublicAssessment />
    </main>
  )
}
