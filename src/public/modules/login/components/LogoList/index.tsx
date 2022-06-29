import React from 'react'
import { logoList } from './enums'
import { Logo } from '../../../../../core'

import styles from './style/styles.module.sass'
import { LogoSize } from '../../../../../core/components/ui-components/Logo/interface'

export const LogoList = () => {
  return (
    <div className={styles['logo-list']}>
      {
        logoList.map((item, index) => (
          <Logo logo={item.logo} key={index} size={LogoSize.SMALL} />
        ))
      }
    </div>
  )
}
