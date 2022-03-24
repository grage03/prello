import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { UiImage } from '../../../../../core/components/ui-components'
import { AuthWrapperProps, pageInformationType } from './interface'

import './style/styles.sass'
import '../../../../../assets/styles/_variables.sass'
import { loginPlaceholder, registrationPlaceholder } from './const'
import { LogoList } from '../LogoList'
import { scrollToTop } from '../../../../../core/plugins/utilities/functions'

export const AuthWrapper = ({ children }: AuthWrapperProps) => {
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
    <div className="h-container authorization">
      <div className="authorization__img">
        <UiImage src={pageInformation.page} width="60%" />
      </div>
      <div className="authorization__interaction">
        <h2 className="authorization__title">{t(`translation:public-${pageInformation.page}`)}</h2>
        <LogoList />
        {children}
        <div className="authorization__help">
          <h5 className="authorization__help-description">{t(pageInformation.description)}</h5>
          <Link className="authorization__help-link" to={`/${pageInformation.to.toLowerCase()}`}>
            {t(pageInformation.value)}
          </Link>
        </div>
      </div>
    </div>
  )
}
