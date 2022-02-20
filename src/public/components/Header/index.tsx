import React from 'react'
import { observer } from 'mobx-react'

import '../../../assets/styles/_helpers.sass'
import './style/styles.sass'

import { UiHint } from '../../../core/components/ui-components/Hint'
import { userStore } from '../../../domain/user/store'

export const Header = observer(() => {
  const { profile } = userStore

  return (
    <header className="h-container header">
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
        <div key="trigger">hello</div>
        <h4 key="trigger">hello</h4>
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
