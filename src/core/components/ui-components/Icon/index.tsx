import React from 'react'
import { IIconProps } from './interface'

export const Icon = ({
  viewBox = "0 0 24 24",
  icon,
  size = 24,
  fill = 'fillColor',
  onClick,
  className,
}: IIconProps) => {
  const handleClick = () => onClick && onClick()

  return (
    <svg
      width={size}
      className={className}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill={fill}
      stroke="strokeColor"
      aria-hidden="true"
      role="presentation"
      onClick={handleClick}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {icon}
    </svg>
  )
}
