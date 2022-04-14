import React from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { UiLogoProps } from './interface'
import { UiImage } from '../Image'
import './style/styles.sass'

export const UiLogo = ({
  logo, size, borderStyle, to,
}: UiLogoProps) => {
  const classes = classNames({
    logo: true,
    'logo--small': size === "small",
    'logo--big': size === "big",
    'logo--border': borderStyle,
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
      <UiImage src={logo} noRadius width={imgSize()} />
    </div>
  )
}
