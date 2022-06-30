import React, { useMemo } from 'react'
import classNames from 'classnames'
import { IImageProps } from './interface'

import styles from './style/styles.module.sass'

export const Image = ({
  src, alt, width = '100%', noRadius,
}: IImageProps) => {
  const classes = classNames({
    [styles['img']]: true,
    [styles['img--radius']]: noRadius,
  })

  const imgSrc = useMemo(() => {
    return require(`../../../../assets/img/${src}.png`)
  }, [src])

  return (
    <img
      style={{ width }}
      className={classes}
      src={imgSrc}
      alt={alt}
    />
  )
}
