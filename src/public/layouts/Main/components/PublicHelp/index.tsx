import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './style/styles.module.sass'
import { Image } from '../../../../../core'
import { Sparks } from '../../../../components'

const sparksPosition = {
  left: '-150px',
  bottom: '60px',
}

export const PublicHelp = () => {
  const { t } = useTranslation()

  return (
    <div className={styles['help-teams']} data-test-id="public-help">
      <div className={styles['help-teams__interaction']}>
        <h1 className={styles['help-teams__title']} data-test-id="team-help">
          {t('translation:public-teams-title')}
        </h1>
        <Sparks position={sparksPosition}>
          <p className={styles['help-teams__description']}>{t('translation:public-teams-description')}</p>
        </Sparks>
        { /*<Input*/ }
        {/*  placeholder={t('translation:input-email')}*/}
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
