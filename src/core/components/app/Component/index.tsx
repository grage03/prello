import React from 'react'
import { IComponentProps } from './interface'

export const Component = ({ element, props = null, value }: IComponentProps<any>) => {
  return React.createElement(element, props, value)
}
