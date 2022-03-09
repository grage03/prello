import React from 'react'
import { useForm } from 'react-hook-form'
import { InputType, UiFormInterface } from './interface'

import './style/styles.sass'
import { UiInput } from '../Input'

export const UiForm = ({ formInputs, onSubmit, width }: UiFormInterface) => {
  const { register, handleSubmit } = useForm<InputType>()

  const cssProps = () => {
    return { width: width ?? '100%' }
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} style={cssProps()}>
      {
        formInputs.map((item, index) => (
          <React.Fragment key={index}>
            <UiInput placeholder={item} type="text" label={item} register={register} />
          </React.Fragment>
        ))
      }
    </form>
  )
}
