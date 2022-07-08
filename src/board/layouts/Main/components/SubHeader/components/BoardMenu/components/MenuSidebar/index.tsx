import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Namespace } from '../../../../../../../../../core'
import { IMenuSidebar } from './interface'

import styles from './style/styles.module.sass'

export const MenuSidebar = ({ onClose }: IMenuSidebar) => {
  const { t } = useTranslation<Namespace[]>(['board__menu_sidebar'], { useSuspense: false })

  const sidebarRoutes = useMemo(() => {
    return [
      {
        name: 'About board',
        description: 'Add a description about board',
      },
      {
        name: 'Change the background',
      },
      {
        name: 'Settings',
      },
      {
        name: 'More',
      },
      {
        name: 'Actions',
      },
    ]
  }, [])

  return (
    <div className={styles['menu-sidebar']}>
      <header className={styles['menu-sidebar__header']}>
        <h3>{t('board__menu_sidebar:menu')}</h3>
        <span className={styles['menu-sidebar__close']} onClick={onClose} />
      </header>
      <section className={styles['menu-sidebar__content']}>
        {sidebarRoutes.map((item) => (
          <div className={styles['menu-sidebar__content-item']} key={item.name}>
            <h4>{item.name}</h4>
            {item.description && <h5>{item.description}</h5>}
          </div>
        ))}
      </section>
    </div>
  )
}
