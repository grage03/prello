import React from 'react'
import { ComponentProps } from './interface'

// TODO: add a few basic tags for element, for example: div, a, etc.
export const Component = ({ element, props = null, value }: ComponentProps<any>) => {
  return React.createElement(element, props, value)
}
