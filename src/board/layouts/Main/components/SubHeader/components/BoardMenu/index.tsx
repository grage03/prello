import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon, Namespace } from '../../../../../../../core'
import { Menu } from '../../../../../../../assets/icon'
import { MenuSidebar } from './components'
import styles from './style/styles.module.sass'

export const BoardMenu = () => {
  const { t } = useTranslation<Namespace[]>(['board__menu_sidebar'], { useSuspense: false })
  const [ isOpenMenu, setIsOpenMenu ] = useState(false)

  const handleOpenMenu = () => setIsOpenMenu(true)
  const handleCloseMenu = () => setIsOpenMenu(false)

  return (
    <section>
      <Icon icon={<Menu />} onClick={handleOpenMenu} className={styles['board-icon']} />
      {isOpenMenu && <MenuSidebar onClose={handleCloseMenu} t={t} />}
    </section>
  )
}
