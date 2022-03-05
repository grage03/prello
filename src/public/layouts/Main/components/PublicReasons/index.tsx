import React from 'react'

import { reasons } from './enum'

import './style/styles.sass'
import { UiImage, UiLink } from '../../../../../core/components/ui-components'

export const PublicReasons = () => {
  return (
    <div className="reasons">
      <div className="reasons__title">
        <h2 className="reasons__title-text">Reasons why you should choose Prello</h2>
        <h4 className="reasons__title-description">Paste here your brilliant text about the coolness of this piece</h4>
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
                <UiLink>Learn more</UiLink>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
