import React, { useContext } from 'react'

import './styles/style.sass'

import { UserContext } from '../../../domain/user/store'
import { UiHint } from '../ui-components/Hint'

export const Header = () => {
  const { user } = useContext(UserContext)

  return (
    <header className="header">
      <div className="header__logo">
        <h1>logo</h1>
      </div>
      <div className="header__navigation">
        <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </nav>
      </div>

      <UiHint description="test">
        <h2 key="trigger">hello</h2>
        <div>
          <h1>ну привет</h1>
        </div>
      </UiHint>

      {
        user.getUser()
          ? <button type="button">log in</button>
          : <h1>user not login</h1>
      }
    </header>
  )
}
