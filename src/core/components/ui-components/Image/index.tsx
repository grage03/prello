import React from 'react'
import classNames from 'classnames'
import { UiImageProps } from './interface'

import './style/styles.sass'

export const UiImage = ({
  src, alt, width, noRadius,
}: UiImageProps) => {
  const classes = classNames({
    img: true,
    'img--radius': noRadius,
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
