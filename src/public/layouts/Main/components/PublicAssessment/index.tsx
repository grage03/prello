import React from 'react'
import { useTranslation } from 'react-i18next'

import './style/styles.sass'
import { Score } from './components/Score'

const assessmentPlaceholder = [
  {
    icon: "",
    service: "translation:public-assessment-convenience",
    score: 5,
  },
  {
    icon: "",
    service: "translation:public-assessment-support",
    score: 4.5,
  },
  {
    icon: "",
    service: "translation:public-assessment-interfaces",
    score: 3,
  },
  {
    icon: "",
    service: "translation:public-assessment-communication",
    score: 3.5,
  },
]

export const PublicAssessment = () => {
  const { t } = useTranslation()

  return (
    <div className="assessment">
      {
        assessmentPlaceholder.map((item, index) => (
          <div className="assessment__item" key={index}>
            <h3 className="assessment__title">{t(item.service)}</h3>
            <div className="assessment__score">
              <Score score={item.score} />
            </div>
          </div>
        ))
      }
    </div>
  )
}
