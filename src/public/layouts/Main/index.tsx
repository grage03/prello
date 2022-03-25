import React, { useEffect } from 'react'

import '../../../assets/styles/_helpers.sass'
import './style/styles.sass'

import {
  PublicAssessment,
  PublicHelp,
  PublicReviews,
  PublicReasons,
  PublicPartners,
} from './components'
import { ScrollItem } from '../../components/ScrollItem'
import { scrollToTop } from '../../../core/plugins/utilities/functions'

export const PublicPage = () => {
  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <main className="h-container public-wrapper">
      <ScrollItem />
      <PublicHelp />
      <PublicReasons />
      <PublicPartners />
      <PublicReviews />
      <PublicAssessment />
    </main>
  )
}
