import React from 'react'

import './style/styles.sass'
import { partners } from './enum'
import { UiLogo } from '../../../../../core/components/ui-components'

export const PublicPartners = () => {
  return (
    <div className="partners">
      <div className="partners__title">
        <h2>Our partners</h2>
        <h4>Paste here your brilliant text about the coolness of this piece</h4>
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
