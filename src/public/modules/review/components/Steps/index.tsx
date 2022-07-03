import React from 'react'

import styles from './style/styles.module.sass'
import { Button } from '../../../../../core'
import { StyleType } from '../../../../../core/components/ui-components/Button/interface'

export const Steps = () => {
  return (
    <div className={styles['steps']}>
      <Button placeholder="Go back" style={StyleType.TRANSPARENT} width="20%" />
      <Button placeholder="Next step" width="20%" />
    </div>
  )
}
