import React from 'react'
import { IMenuSidebar } from './interface'
import { useSidebar } from './hooks'

import styles from './style/styles.module.sass'

export const MenuSidebar = ({ onClose, t }: IMenuSidebar) => {
  const {
    headerName,
    handleRouteMain,
    renderCurrentSidebar,
    isMain,
  } = useSidebar(t)

  return (
    <div className={styles['menu-sidebar']}>
      <header className={styles['menu-sidebar__header']}>
        {!isMain && <span className={styles['menu-sidebar__back']} onClick={handleRouteMain} />}
        <h3>{headerName}</h3>
        <span className={styles['menu-sidebar__close']} onClick={onClose} />
      </header>
      <section className={styles['menu-sidebar__content']}>
        {renderCurrentSidebar}
      </section>
    </div>
  )
}
