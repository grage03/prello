import React from 'react'
import { ComponentProps } from './interface'

export const Component = ({ element, props = null, value }: ComponentProps<any>) => {
  return React.createElement(element, props, value)
}
