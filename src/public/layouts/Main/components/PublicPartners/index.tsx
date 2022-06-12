import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './style/styles.module.sass'
import { partners } from './enum'
import { UiLogo } from '../../../../../core/components'
import { Sparks } from '../../../../components'

const sparksPosition = {
  top: '40px',
  left: '20px',
}

export const PublicPartners = () => {
  const { t } = useTranslation()

  return (
    <div className="partners" id="partners" data-test-id="public-partners">
      <div className={styles['partners__title']} data-aos="fade-right" data-aos-duration="1000">
        <Sparks size="small" position={sparksPosition} rotate={120}>
          <h2>{t('translation:public-partners-title')}</h2>
        </Sparks>
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
