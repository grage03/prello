import React from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { ILogoProps } from './interface'
import { Image } from '../Image'
import styles from './style/styles.module.sass'

export const Logo = ({ logo, size, to }: ILogoProps) => {
  const classes = classNames({
    [styles['logo']]: true,
    [styles['logo--small']]: size === "small",
    [styles['logo--big']]: size === "big",
  })

  const navigate = useNavigate()

  const imgSize = () => {
    return size === "small" ? "80%" : "100%"
  }

  const onUserClickLogo = () => {
    if (!to) throw new Error("Route is empty!")
    navigate(to)
  }

  return (
    <div className={classes} onClick={onUserClickLogo}>
      <Image src={logo} noRadius width={imgSize()} />
    </div>
  )
}
