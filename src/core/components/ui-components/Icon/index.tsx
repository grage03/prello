import React from 'react'
import { UiLogoProps } from './interface'

export const UiIcon = ({
  viewBox = "0 0 24 24", children, size = 24,
}: UiLogoProps) => {
  return (
    <div className="icon">
      <svg
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        fill="fillColor"
        stroke="strokeColor"
        aria-hidden="true"
        role="presentation"
      >
        {children}
      </svg>
    </div>
  )
}
