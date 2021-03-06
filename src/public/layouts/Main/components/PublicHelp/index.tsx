import React from 'react'
import { useTranslation } from 'react-i18next'

import { Image } from '../../../../../core'

import styles from './style/styles.module.sass'

export const PublicHelp = () => {
  const { t } = useTranslation(['public__layout'])

  return (
    <div className={styles['help-teams']} data-test-id="public-help">
      <div className={styles['help-teams__interaction']}>
        <h1 className={styles['help-teams__title']} data-test-id="team-help">
          {t('public__layout:teams-title')}
        </h1>
        <p className={styles['help-teams__description']}>{t('public__layout:teams-description')}</p>
        { /*<Input*/ }
        {/*  placeholder={t('public__layout:teams-email')}*/}
        {/*  type="email"*/}
        {/*>*/}
        {/*  <Button description={t('translation:user-join')} onClick={onUserClickButton} key="button"/>*/}
        {/*</Input>*/}
      </div>
      <div className={styles['help-teams__image']}>
        <Image src="helpTeams" width="480px" />
      </div>
    </div>
  )
}
