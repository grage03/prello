import React from 'react'
import classNames from 'classnames'
import { IButtonList } from './interface'

import styles from './style/styles.module.sass'

export const ButtonList = ({ buttons, currentItem, setCurrentItem }: IButtonList) => {
  const handleSelectItem = (item: string) => setCurrentItem(item)

  return (
    <div className={styles['button-list']}>
      {buttons.map((item, index) => (
        <div
          className={classNames({
            [styles['button-list__element']]: true,
            [styles['button-list__element--active']]: item.key === currentItem,
          })}
          onClick={() => handleSelectItem(item.key)}
          key={index}
        >
          <h4>{item.title}</h4>
          <h5>{item.description}</h5>
        </div>
      ))}
    </div>
  )
}
