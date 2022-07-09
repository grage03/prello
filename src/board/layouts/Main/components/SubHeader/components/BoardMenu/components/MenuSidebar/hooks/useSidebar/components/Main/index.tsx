import React from 'react'
import styles from '../../../../style/styles.module.sass'
import { IMenu } from './interface'

export const Main = ({ sidebarRoutes, handleChangeSidebar }: IMenu) => {
  return (
    <>
      {sidebarRoutes.map((item) => (
        <div
          className={styles['menu-sidebar__content-item']}
          key={item.name}
          onClick={() => handleChangeSidebar(item)}
        >
          <h4>{item.name}</h4>
          {item.description && <h5>{item.description}</h5>}
        </div>
      ))}
    </>
  )
}
