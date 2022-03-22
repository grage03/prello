import React from 'react'
import { useTranslation } from 'react-i18next'

import './style/styles.sass'
import { UiButton, UiImage, UiInput } from '../../../../../core/components/ui-components'

export const PublicHelp = () => {
  const { t } = useTranslation()

  const onUserClickButton = () => {
    alert('ok')
  }

  return (
    <div className="help-teams">
      <div className="help-teams__interaction">
        <h1 className="help-teams__title">{t('translation:public-teams-title')}</h1>
        <p className="help-teams__description">{t('translation:public-teams-description')}</p>
        <UiInput
          placeholder={t('translation:input-email')}
          type="email"
          width="80%"
        >
          <React.Fragment key="button">
            <UiButton description={t('translation:user-join')} onClick={onUserClickButton} width="30%" />
          </React.Fragment>
        </UiInput>
      </div>
      <div className="help-teams__image">
        <UiImage src="helpTeams" width="480px" />
      </div>
    </div>
  )
}
