import React from 'react'
import { observer } from 'mobx-react'
import './styles/style.sass'

import { UiHint } from '../ui-components/Hint'
import { userStore } from '../../../domain/user/store'

export const Header = observer(() => {
  const { profile } = userStore

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
        profile
          ? <button type="button">log in</button>
          : <h1>user not login</h1>
      }
    </header>
  )
})
