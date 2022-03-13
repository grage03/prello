import React from 'react'
import { logoList } from './enums'
import { UiLogo } from '../../../../../core/components/ui-components'

import './style/styles.sass'

export const LogoList = () => {
  return (
    <div className="logo-list">
      {
        logoList.map((item, index) => (
          <UiLogo logo={item.logo} key={index} size="small" />
        ))
      }
    </div>
  )
}
