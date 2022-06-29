import React from 'react'
import classNames from 'classnames'
import { IInputProps } from './interface'

import styles from './style/styles.module.sass'
import { useSlots } from '../../../hooks'

export const Input = ({
  placeholder,
  width = 'auto',
  type = "text",
  register,
  children,
  label,
}: IInputProps) => {
  const slots = useSlots({ children })
  const classes = classNames({
    [styles['form-input__item']]: true,
    [styles['form-input__item--button']]: slots.button,
  })

  return (
    <div className={styles['form-input']} style={{ width }}>
      <input
        className={classes}
        placeholder={placeholder}
        type={type}
        {...register(label)}
      />
      {slots.button}
    </div>
  )
}
