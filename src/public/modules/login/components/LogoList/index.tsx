import React from 'react'
import { logoList } from './enums'
import { Logo } from '../../../../../core/components'

import styles from './style/styles.module.sass'

export const LogoList = () => {
  return (
    <div className={styles['logo-list']}>
      {
        logoList.map((item, index) => (
          <Logo logo={item.logo} key={index} size="small" />
        ))
      }
    </div>
  )
}
