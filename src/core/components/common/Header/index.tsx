import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { UserWrapper } from './components/UserWrapper'
import { LogoIcon } from '../../../../assets/icon'
import { UiIcon } from '../../ui-components'

import styles from './style/styles.module.sass'
import { navigationOptions } from './enums'
import { Anchor } from '../../app'
import { IHeader } from './interface'

const BurgerMenu = React.lazy(() => import('./components/Burger'))

export const Header = ({ shadow = true }: IHeader) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const isPublicPage = pathname === '/'

  const classes = classNames({
    [styles['header']]: true,
    [styles['header--shadow']]: shadow,
  })

  const onUserClickLogo = () => {
    if (pathname === '/') return
    navigate('/')
  }

  return (
    <header className={classes} data-test-id="header">
      <div className={styles['header__logo']}>
        {isPublicPage && (
          <div className={styles['header__burger']}>
            <BurgerMenu />
          </div>
        )}
        <div className={styles['header__logo-icon']} onClick={onUserClickLogo}>
          <UiIcon size={60} viewBox="0 0 80 80" icon={<LogoIcon />} />
        </div>
      </div>
      {isPublicPage && (
        <nav className={styles['header__navigation']}>
          <ul>
            {
              navigationOptions.map((item) => (
                <li key={item.option} className={styles['header__navigation-item']} data-test-id={`${item.option}`}>
                  <Anchor anchor={item.option}>{t(item.name)}</Anchor>
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
