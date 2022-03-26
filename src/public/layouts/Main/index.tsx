import React, { useEffect, useRef } from 'react'

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
import { useScroll } from '../../../core/hooks/useScroll/useScroll'
import { scrollToTop } from '../../../core/lib/utilities/functions'

export const PublicPage = () => {
  const { y } = useScroll()
  const topPosition = useRef(null)

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <main className="h-container public-wrapper" ref={topPosition}>
      {y > 400 && <ScrollItem />}
      <PublicHelp />
      <PublicReasons />
      <PublicPartners />
      <PublicReviews />
      <PublicAssessment />
    </main>
  )
}
