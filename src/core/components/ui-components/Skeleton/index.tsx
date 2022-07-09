import React from 'react'
import classNames from 'classnames'
import { ISkeleton, SkeletonType } from './interface'

import styles from './style/styles.module.sass'

export const Skeleton = ({ type = SkeletonType.RECTANGLE }: ISkeleton) => {
  const classes = classNames({
    [styles['skeleton']]: true,
    [styles[`skeleton--${type}`]]: true,
  })

  return (
    <div className={classes} />
  )
}
