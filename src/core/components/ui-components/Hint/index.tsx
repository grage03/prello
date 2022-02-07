import React from 'react'
import { UiHintProps } from './interface'
import { useSlots } from '../../../hooks/useSlots/useSlots'

export const UiHint = ({ children }: UiHintProps) => {
  const slots = useSlots({ children })

  console.log(slots)
  return (
    <div>
      {slots.trigger}
      <h1>aas</h1>
    </div>
  )
}
