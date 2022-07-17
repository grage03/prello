import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import Aos from 'aos'
import 'aos/dist/aos.css'

import {
  PublicAssessment,
  PublicHelp,
  PublicReviews,
  PublicReasons,
  PublicPartners,
} from './components'
import { ScrollItem } from '../../components'
import { Namespace } from '../../../core'

import '../../../assets/styles/_helpers.sass'
import './style/styles.sass'

export const PublicPage = () => {
  const { t } = useTranslation<Namespace[]>(['public__layout'])

  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])

  return (
    <>
      <Helmet>
        <title>{t('public__layout:meta-title')}</title>
        <meta name="description" content={t('public__layout:meta-description')} />
      </Helmet>
      <div className="public-wrapper" data-test-id="public-main">
        <ScrollItem />
        <PublicHelp />
        <PublicReasons />
        <PublicPartners />
        <PublicReviews />
        <PublicAssessment />
      </div>
    </>
  )
}
