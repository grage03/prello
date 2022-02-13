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
        <h3>logo</h3>
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
<<<<<<< HEAD
        <div key="trigger">hello</div>
=======
        <h4 key="trigger">hello</h4>
>>>>>>> 2f4d497a5323ea1aa1c46a506b456ef924e85ec6
        <div>
          ну привет
        </div>
      </UiHint>
      {
        profile
          ? <button type="button">log in</button>
          : <h3>user not login</h3>
      }
    </header>
  )
})
