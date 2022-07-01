import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { UserWrapper } from './components'
import { LogoIcon } from '../../../../assets/icon'
import { Icon } from '../../ui-components'

import styles from './style/styles.module.sass'
import { navigationOptions } from './enums'
import { Anchor } from '../../app'
import { useMatchMedia } from '../../../hooks'
import { Namespace } from '../../../lib'

const BurgerMenu = React.lazy(() => import('./components/Burger'))

export const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { t } = useTranslation<Namespace[]>(['header__layout'])
  const { isMobile } = useMatchMedia()
  const isPublicPage = pathname === '/'

  const onUserClickLogo = () => {
    if (pathname === '/') return
    navigate('/')
  }

  return (
    <header className={styles['header']} data-test-id="header">
      <div className={styles['header__logo']}>
        {isPublicPage && isMobile && (
          <div className={styles['header__burger']} data-test-id="burger-menu">
            <BurgerMenu />
          </div>
        )}
        <div className={styles['header__logo-icon']} onClick={onUserClickLogo}>
          <Icon size={60} viewBox="0 0 80 80" icon={<LogoIcon />} />
        </div>
      </div>
      {isPublicPage && (
        <nav className={styles['header__navigation']}>
          <ul>
            {
              navigationOptions.map((item) => (
                <li key={item.option} className={styles['header__navigation-item']} data-test-id={`${item.option}`}>
                  <Anchor anchor={item.option}>{t(`header__layout:${item.option}`)}</Anchor>
                </li>
              ))
            }
          </ul>
        </nav>
      )}
      <UserWrapper />
    </header>
  )
}
