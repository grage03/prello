import React from 'react'

import './style/styles.sass'
import { Score } from './components/Score'

const assessmentPlaceholder = [
  {
    icon: "",
    service: "Convenience of work",
    score: 5,
  },
  {
    icon: "",
    service: "Quick support",
    score: 4.5,
  },
  {
    icon: "",
    service: "User-friendly interfaces",
    score: 3,
  },
  {
    icon: "",
    service: "Convenient communication",
    score: 3.5,
  },
]

export const PublicAssessment = () => {
  return (
    <div className="assessment">
      {
        assessmentPlaceholder.map((item, index) => (
          <div className="assessment__item" key={index}>
            <h3 className="assessment__title">{item.service}</h3>
            <div className="assessment__score">
              <Score score={item.score} />
            </div>
          </div>
        ))
      }
    </div>
  )
}
