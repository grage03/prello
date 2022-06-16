import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './style/styles.module.sass'
import { Link } from '../../../../../core/components'

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

  return (
    <div className={styles['people-reviews']} id="reviews" data-test-id="public-reviews">
      <div className={styles['people-reviews__interactions']} data-aos="fade-up" data-aos-duration="1000">
        <h2>{t('translation:public-reviews-title')}</h2>
        <Link>{t('translation:see-more')}</Link>
      </div>
      <div className={styles['people-reviews__list']}>
        {
          reviewsPlaceholder.map((item, index) => (
            <div
              className={styles['people-reviews__item']}
              key={index}
              data-aos="fade-left"
              data-aos-duration={`${index}500`}
            >
              <p>{item.review}</p>
              <div className={styles['people-reviews__item-user']}>
                <img className={styles['people-reviews__avatar']} src={item.avatar} alt="avatar" />
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
