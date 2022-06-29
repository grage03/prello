import React from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { ILogoProps, LogoSize } from './interface'
import { Image } from '../Image'
import styles from './style/styles.module.sass'

export const Logo = ({ logo, size = LogoSize.STANDARD, to }: ILogoProps) => {
  const classes = classNames({
    [styles['logo']]: true,
    [styles[`logo--${size}`]]: true,
  })

  const navigate = useNavigate()

  const onUserClickLogo = () => {
    if (!to) throw new Error("Route is empty!")
    navigate(to)
  }

  return (
    <div className={classes} onClick={onUserClickLogo}>
      <Image src={logo} noRadius />
    </div>
  )
}
