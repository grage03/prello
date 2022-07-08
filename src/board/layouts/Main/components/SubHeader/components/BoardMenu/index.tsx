import React, { useState } from 'react'
import { Icon } from '../../../../../../../core'
import { Menu } from '../../../../../../../assets/icon'

import styles from './style/styles.module.sass'
import { MenuSidebar } from './components'

export const BoardMenu = () => {
  const [ isOpenMenu, setIsOpenMenu ] = useState(false)

  const handleOpenMenu = () => setIsOpenMenu(true)
  const handleCloseMenu = () => setIsOpenMenu(false)

  return (
    <section>
      <Icon icon={<Menu />} onClick={handleOpenMenu} className={styles['board-icon']} />
      {isOpenMenu && <MenuSidebar onClose={handleCloseMenu} />}
    </section>
  )
}
