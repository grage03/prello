import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './style/styles.module.sass'
import { UiButton, UiImage, UiInput } from '../../../../../core/components/ui-components'

export const PublicHelp = () => {
  const { t } = useTranslation()

  const onUserClickButton = () => {
    return true
  }

  return (
    <div className={styles['help-teams']}>
      <div className={styles['help-teams__interaction']}>
        <h1 className={styles['help-teams__title']}>{t('translation:public-teams-title')}</h1>
        <p className={styles['help-teams__description']}>{t('translation:public-teams-description')}</p>
        <UiInput
          placeholder={t('translation:input-email')}
          type="email"
        >
          <React.Fragment key="button">
            <UiButton description={t('translation:user-join')} onClick={onUserClickButton} />
          </React.Fragment>
        </UiInput>
      </div>
      <div className={styles['help-teams__image']}>
        <UiImage src="helpTeams" width="480px" />
      </div>
    </div>
  )
}
