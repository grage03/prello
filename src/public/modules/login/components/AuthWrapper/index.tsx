import React, { useEffect, useMemo } from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

import { Image, Namespace, scrollToTop } from '../../../../../core'
import { IAuthWrapperProps } from './interface'
import { loginPlaceholder, registrationPlaceholder } from './const'
import { LogoList } from '../LogoList'

import styles from './style/styles.module.sass'

export const AuthWrapper = ({ children }: IAuthWrapperProps) => {
  const { pathname } = useLocation()
  const { t } = useTranslation<Namespace[]>(['public__auth'])

  const pageInformation = useMemo(() => {
    return pathname === '/login' ? loginPlaceholder : registrationPlaceholder
  }, [pathname])

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <>
      <Helmet>
        <title>{t(`public__auth:meta-${pageInformation.page}-title`)}</title>
        <meta name="description" content={t(`public__auth:meta-${pageInformation.page}-description`)} />
      </Helmet>
      <div className={styles['authorization']}>
        <div className={styles['authorization__img']}>
          <Image src={pageInformation.page} width="60%" />
        </div>
        <div className={styles['authorization__interaction']}>
          <h2 className={styles['authorization__title']}>{t(`public__auth:${pageInformation.page}`)}</h2>
          <LogoList />
          {children}
          <div className={styles['authorization__help']}>
            <h5 className={styles['authorization__help-description']}>{t(pageInformation.description)}</h5>
            <Link className="authorization__help-link" to={`/${pageInformation.value}`}>
              {t(`public__auth:${pageInformation.value}`)}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
