import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './style/styles.module.sass'
import { ButtonList, Steps, Wrapper } from '../../../../components'
import { IHeader } from '../../../../components/Wrapper/interface'
import { Namespace } from '../../../../../../../core'

export const ReviewInteraction = () => {
  const { t } = useTranslation<Namespace[]>(['public__review'])
  const [ currentReview, setCurrentReview ] = useState('client')

  const renderHeader = useMemo<IHeader>(() => {
    return {
      text: t('public__review:share-experience'),
    }
  }, [])

  const buttonList = useMemo(() => {
    return [
      {
        title: t('public__review:user-review'),
        description: t('public__review:user-description'),
        key: 'client',
      },
      {
        title: t('public__review:company-review'),
        description: t('public__review:company-description'),
        key: 'company',
      },
    ]
  }, [])

  return (
    <div className={styles['interaction']}>
      <Wrapper header={renderHeader}>
        <h5>{t('public__review:share-history')}</h5>
        <div className={styles['interaction__block']}>
          <h3>{t('public__review:what-share')}</h3>
          <ButtonList
            buttons={buttonList}
            currentItem={currentReview}
            setCurrentItem={setCurrentReview}
          />
        </div>
        <Steps />
      </Wrapper>
    </div>
  )
}
