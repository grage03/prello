import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])

  return (
    <div className="people-reviews">
      <div className="people-reviews__interactions" data-aos="fade-up" data-aos-duration="1000">
        <h2>{t('translation:public-reviews-title')}</h2>
        <UiLink>{t('translation:see-more')}</UiLink>
      </div>
      <div className="people-reviews__list">
        {
          reviewsPlaceholder.map((item, index) => (
            <div className="people-reviews__item" key={index} data-aos="fade-left" data-aos-duration={`${index}500`}>
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
