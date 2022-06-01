import React from 'react'
import { logoList } from './enums'
import { UiLogo } from '../../../../../core/components/ui-components'

import styles from './style/styles.module.sass'

export const LogoList = () => {
  return (
    <div className={styles['logo-list']}>
      {
        logoList.map((item, index) => (
          <UiLogo logo={item.logo} key={index} size="small" />
        ))
      }
    </div>
  )
}
