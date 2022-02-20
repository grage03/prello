import React from 'react'
import { UiImageProps } from './interface'

import './style/styles.sass'

export const UiImage = ({ src, alt, width }: UiImageProps) => {
  const imgSrc = () => {
    return require(`../../../../assets/img/${src}.png`)
  }

  return (
    <img
      style={{ width: width ? `${width}px` : '100%' }}
      className="img"
      src={imgSrc()}
      alt={alt}
    />
  )
}
