import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
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
import { scrollToTop } from '../../../core/lib/utilities/functions'

export const PublicPage = () => {
  useEffect(() => {
    scrollToTop()
    Aos.init()
    Aos.refresh()
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
