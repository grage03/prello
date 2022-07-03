import React from 'react'
import { IWrapper } from './interface'

import styles from './style/styles.module.sass'

// TODO: add icon
export const Wrapper = ({ children, header }: IWrapper) => {
  return (
    <div className={styles['review-wrapper']}>
      <h1 className={styles['review-wrapper__header']}>{header.text}</h1>
      <div className={styles['review-wrapper__content']}>{children}</div>
    </div>
  )
}
