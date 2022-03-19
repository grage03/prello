import React from 'react'
import { useTranslation } from 'react-i18next'

import { reasons } from './enum'

import './style/styles.sass'
import { UiImage, UiLink } from '../../../../../core/components/ui-components'

export const PublicReasons = () => {
  const { t } = useTranslation()

  return (
    <div className="reasons">
      <div className="reasons__title">
        <h2 className="reasons__title-text">{t('translation:public-reasons-title')}</h2>
        <h4 className="reasons__title-description">{t('translation:public-reasons-description')}</h4>
      </div>
      <div className="reasons__list">
        {
          reasons.map((item) => (
            <div className="reasons__item" key={item.title}>
              <div className="reasons__item-image">
                <UiImage src={item.img} />
              </div>
              <div className="reasons__item-description">
                <h4 className="reasons__item-title">{item.title}</h4>
                <p className="reasons__item-text">{item.description}</p>
                <UiLink>{t('translation:user-more')}</UiLink>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
