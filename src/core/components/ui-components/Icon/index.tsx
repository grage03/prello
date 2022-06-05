import React from 'react'
import { IUiIconProps } from './interface'

export const UiIcon = ({
  viewBox = "0 0 24 24", icon, size = 24, fill = 'fillColor',
}: IUiIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill={fill}
      stroke="strokeColor"
      aria-hidden="true"
      role="presentation"
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
