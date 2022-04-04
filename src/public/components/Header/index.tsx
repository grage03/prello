import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { UserWrapper } from './components/UserWrapper'
import { LogoIcon } from '../../../assets/icon/app/logo'
import { UiLink, UiIcon } from '../../../core/components/ui-components'

import '../../../assets/styles/_helpers.sass'
// TODO: need fix
import styles from './style/styles.module.sass'
import { navigationOptions } from './enums'

const BurgerMenu = React.lazy(() => import('./components/Burger'))

export const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { t } = useTranslation()

  const onUserClickLogo = () => {
    if (pathname === '/') return
    navigate('/')
  }

  return (
    <header className={styles['header']}>
      <div className={styles['header__burger']}>
        <BurgerMenu />
      </div>
      <div className={styles['header__logo']} onClick={onUserClickLogo}>
        <UiIcon size={60} viewBox="0 0 80 80" icon={<LogoIcon />} />
      </div>
      <nav className={styles['header__navigation']}>
        <ul>
          {
            navigationOptions.map((item) => (
              <li key={item.option} className={styles['header__navigation-item']}>
                <UiLink>{t(item.name)}</UiLink>
              </li>
            ))
          }
        </ul>
      </nav>
      <UserWrapper />
    </header>
  )
}
