import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'

import { reasons } from './enum'

import styles from './style/styles.module.sass'
import { UiImage, UiLink } from '../../../../../core/components/ui-components'

export const PublicReasons = () => {
  const { t } = useTranslation()
  const titleRef = useRef(null)

  return (
    <div className="reasons">
      <div className="reasons__title" ref={titleRef} data-aos="fade-up" data-aos-duration="1000">
        <h2 className={styles['reasons__title-text']}>{t('translation:public-reasons-title')}</h2>
        <h4 className={styles['reasons__title-description']}>{t('translation:public-reasons-description')}</h4>
      </div>
      <div className={styles['reasons__list']}>
        {
          reasons.map((item, index) => (
            <div
              key={item.title}
              className={styles['reasons__item']}
              data-aos={`fade-${index % 2 ? 'left' : 'right'}`}
              data-aos-duration="1500"
            >
              <div className={styles['reasons__item-image']}>
                <UiImage src={item.img} />
              </div>
              <div className={styles['reasons__item-description']}>
                <h4 className={styles['reasons__item-title']}>{item.title}</h4>
                <p className={styles['reasons__item-text']}>{item.description}</p>
                <UiLink>{t('translation:user-more')}</UiLink>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
