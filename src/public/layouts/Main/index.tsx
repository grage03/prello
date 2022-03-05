import React from 'react'

import '../../../assets/styles/_helpers.sass'
import './style/styles.sass'

import {
  PublicAssessment,
  PublicHelp,
  PublicReviews,
  PublicReasons,
  PublicPartners,
} from './components'

export const PublicPage = () => {
  return (
    <main className="h-container public-wrapper">
      <PublicHelp />
      <PublicReasons />
      <PublicPartners />
      <PublicReviews />
      <PublicAssessment />
    </main>
  )
}
