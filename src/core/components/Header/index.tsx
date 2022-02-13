import React from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react'
import './styles/style.sass'

import { UiHint } from '../ui-components/Hint'
import { userStore } from '../../../domain/user/store'
import { UiSelect } from '../ui-components'

export const Header = observer(() => {
  const { profile } = userStore
  const { t, i18n } = useTranslation([ 'translation' ])

  const changeLocale = async (key: 'en' | 'ru') => {
    if (i18n.language === key) return

    const currentLocale = key === 'ru' ? 'ru' : 'en'
    await i18n.changeLanguage(currentLocale)
  }

  return (
    <header className="header">
      <div className="header__logo">
        <h1>{ t('translation:header') }</h1>
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
      <UiSelect
        selectItems={[ 'en', 'ru' ]}
        onClickItem={changeLocale}
      />
      <UiHint description="test">
        <div key="trigger">hello</div>
        <div>
          ну привет
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
