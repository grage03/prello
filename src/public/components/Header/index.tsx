import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { UserWrapper } from './components/UserWrapper'
import { LogoIcon } from '../../../assets/icon/app/logo'
import { UiLink, UiIcon } from '../../../core/components/ui-components'

import '../../../assets/styles/_helpers.sass'
import './style/styles.sass'
import { navigationOptions } from './enums'

const BurgerMenu = React.lazy(() => import('./components/Burger'))

export const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const onUserClickLogo = () => {
    if (pathname === '/') return
    navigate('/')
  }

  return (
    <header className="header">
      <div className="h-container header__wrapper">
        <div className="header__burger">
          <BurgerMenu />
        </div>
        <div className="header__logo" onClick={onUserClickLogo}>
          <UiIcon size={60} viewBox="0 0 70 70">
            <LogoIcon />
          </UiIcon>
        </div>
        <nav className="header__navigation">
          <ul>
            {
              navigationOptions.map((item) => (
                <li key={item.option} className="header__navigation-item">
                  <UiLink>{item.name}</UiLink>
                </li>
              ))
            }
          </ul>
        </nav>
        <UserWrapper />
      </div>
    </header>
  )
}
