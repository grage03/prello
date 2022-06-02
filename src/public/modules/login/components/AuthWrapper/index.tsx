import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { UiImage } from '../../../../../core/components/ui-components'
import { IAuthWrapperProps, pageInformationType } from './interface'

import styles from './style/styles.module.sass'
import { loginPlaceholder, registrationPlaceholder } from './const'
import { LogoList } from '../LogoList'
import { scrollToTop } from '../../../../../core/lib/utilities/functions'

export const AuthWrapper = ({ children }: IAuthWrapperProps) => {
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const [ pageInformation, setPageInformation ] = useState<pageInformationType>(loginPlaceholder)

  useEffect(() => {
    setPageInformation(pathname === '/login' ? loginPlaceholder : registrationPlaceholder)
  }, [ pathname ])

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <>
      <Helmet>
        <title>{t(`translation:meta-${pageInformation.page}-title`)}</title>
        <meta name="description" content={t('translation:meta-public-description')} />
      </Helmet>
      <div className={styles['authorization']}>
        <div className={styles['authorization__img']}>
          <UiImage src={pageInformation.page} width="60%" />
        </div>
        <div className={styles['authorization__interaction']}>
          <h2 className={styles['authorization__title']}>{t(`translation:public-${pageInformation.page}`)}</h2>
          <LogoList />
          {children}
          <div className={styles['authorization__help']}>
            <h5 className={styles['authorization__help-description']}>{t(pageInformation.description)}</h5>
            <Link className="authorization__help-link" to={`/${pageInformation.to.toLowerCase()}`}>
              {t(pageInformation.value)}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
