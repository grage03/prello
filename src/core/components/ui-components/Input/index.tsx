import React from 'react'
import classNames from 'classnames'

import { IInputProps } from './interface'

import styles from './style/styles.module.sass'

export const Input = ({
  placeholder,
  width = 'auto',
  type = "text",
  register,
  children,
  label,
}: IInputProps) => {
  const classes = classNames({
    [styles['form-input__item']]: true,
    [styles['formInput__item-children']]: children,
  })

  return (
    <div className={styles['form-input']} style={{ width }}>
      <input
        className={classes}
        placeholder={placeholder}
        type={type}
        {...register(label)}
      />
      {children}
    </div>
  )
}
