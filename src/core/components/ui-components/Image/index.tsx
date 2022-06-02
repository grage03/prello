import React from 'react'
import classNames from 'classnames'
import { IUiImageProps } from './interface'

import styles from './style/styles.module.sass'

export const UiImage = ({
  src, alt, width, noRadius,
}: IUiImageProps) => {
  const classes = classNames({
    [styles['img']]: true,
    [styles['img--radius']]: noRadius,
  })

  const imgSrc = () => {
    return require(`../../../../assets/img/${src}.png`)
  }

  return (
    <img
      style={{ width: width ? `${width}` : '100%' }}
      className={classes}
      src={imgSrc()}
      alt={alt}
    />
  )
}
