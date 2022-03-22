import React from 'react'
import { useTranslation } from 'react-i18next'

import './style/styles.sass'
import { partners } from './enum'
import { UiLogo } from '../../../../../core/components/ui-components'

export const PublicPartners = () => {
  const { t } = useTranslation()

  return (
    <div className="partners">
      <div className="partners__title">
        <h2>{t('translation:public-partners-title')}</h2>
        <h4>{t('translation:public-partners-description')}</h4>
      </div>
      <div className="partners__list">
        {
          partners.map((item, index) => (
            <UiLogo logo={item.img} key={index} />
          ))
        }
      </div>
    </div>
  )
}
