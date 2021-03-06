import React from 'react'
import { useTranslation } from 'react-i18next'

import { Namespace } from '../../../../../core'
import { Score } from './components'

import styles from './style/styles.module.sass'

const assessmentPlaceholder = [
  {
    icon: "",
    service: "public__layout:assessment-convenience",
    score: 5,
  },
  {
    icon: "",
    service: "public__layout:assessment-support",
    score: 4.5,
  },
  {
    icon: "",
    service: "public__layout:assessment-interfaces",
    score: 3,
  },
  {
    icon: "",
    service: "public__layout:assessment-communication",
    score: 3.5,
  },
]

export const PublicAssessment = () => {
  const { t } = useTranslation<Namespace[]>(['public__layout'])

  return (
    <div className={styles['assessment']} data-test-id="public-assessment">
      <div className={styles['assessment__title']} data-aos="zoom-in" data-aos-duration="1500">
        <h2>{t('public__layout:assessment-title')}</h2>
        <h4>{t('public__layout:assessment-subtitle')}</h4>
      </div>
      <div className={styles['assessment__list']}>
        {
          assessmentPlaceholder.map((item, index) => (
            <div className="assessment__item" key={index} data-aos="fade-up" data-aos-duration={`${index}000`}>
              <h3 className={styles['assessment__item-title']}>{t(item.service)}</h3>
              <div className={styles['assessment__score']}>
                <Score score={item.score} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
