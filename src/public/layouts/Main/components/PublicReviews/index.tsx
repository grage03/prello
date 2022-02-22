import React from 'react'

import './style/styles.sass'
import { UiLink } from '../../../../../core/components/ui-components'

const reviewsPlaceholder = [
  {
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae.',
    name: 'Dev opter',
    role: 'Designer',
    avatar: require('../../../../../assets/img/avatar1.png'),
  },
  {
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae.',
    name: 'Dev opter',
    role: 'Designer',
    avatar: require('../../../../../assets/img/avatar2.png'),
  },
  {
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae.',
    name: 'Dev opter',
    role: 'Designer',
    avatar: require('../../../../../assets/img/avatar3.png'),
  },
]

export const PublicReviews = () => {
  return (
    <div className="people-reviews">
      <div className="people-reviews__interactions">
        <h2>People Are Saying About Us</h2>
        <UiLink>See more</UiLink>
      </div>
      <div className="people-reviews__list">
        {
          reviewsPlaceholder.map((item, index) => (
            <div className="people-reviews__item" key={index}>
              <p>{item.review}</p>
              <div className="people-reviews__item-user">
                <img className="people-reviews__avatar" src={item.avatar} alt="avatar" />
                <div>
                  <h4>{item.name}</h4>
                  <h5>{item.role}</h5>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
