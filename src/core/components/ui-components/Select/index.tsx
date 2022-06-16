import React, { useState } from 'react'
import { ISelectProps } from './interface'
import './style/style.sass'

// TODO add animation, add the ability to close when clicking outside the component, also the arrow icon
export const Select = ({
  label,
  selectItems,
  onClickItem,
  customAttributes,
}: ISelectProps) => {
  const [ selectItem, setSelectItem ] = useState(label)
  const [ classes, setClasses ] = useState('select__label')
  const [ isActive, setIsActive ] = useState(false)

  function onClickSelect() {
    setClasses((prevState) => (isActive ? 'select__label' : `${prevState} select__label--active`))
    setIsActive(!isActive)
  }

  function onInteractive(item: string) {
    setSelectItem(item)
    setIsActive(false)
    onClickItem(item)
  }

  return (
    <div className="select" {...customAttributes}>
      <div className={classes} onClick={onClickSelect}>
        <p>{ selectItem || selectItems[0] }</p>
      </div>
      {isActive && (
        <div className="select__list">
          {selectItems.map((item, index) => {
            return (
              <div className="select__list--item" key={index} onClick={() => onInteractive(item)}>
                { item }
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
