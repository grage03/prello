import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './style/styles.module.sass'
import { partners } from './enum'
import { UiLogo } from '../../../../../core/components/ui-components'

export const PublicPartners = () => {
  const { t } = useTranslation()

  return (
    <div className="partners">
      <div className={styles['partners__title']} data-aos="fade-right" data-aos-duration="1000">
        <h2>{t('translation:public-partners-title')}</h2>
        <h4>{t('translation:public-partners-description')}</h4>
      </div>
      <div className={styles['partners__list']}>
        {
          partners.map((item, index) => (
            <div data-aos="zoom-in" data-aos-duration={`${index}000`} key={index}>
              <UiLogo logo={item.img} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
