import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { UiImage } from '../../../../../core/components/ui-components'
import { AuthWrapperProps, pageInformationType } from './interface'

import './style/styles.sass'
import '../../../../../assets/styles/_variables.sass'
import { loginPlaceholder, registrationPlaceholder } from './const'
import { LogoList } from '../LogoList'

export const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const { pathname } = useLocation()
  const [ pageInformation, setPageInformation ] = useState<pageInformationType>(loginPlaceholder)

  useEffect(() => {
    setPageInformation(pathname === '/login' ? loginPlaceholder : registrationPlaceholder)
  }, [ pathname ])

  return (
    <div className="h-container authorization">
      <div className="authorization__img">
        <UiImage src={pageInformation.page} />
      </div>
      <div className="authorization__interaction">
        <h2 className="authorization__title">{pageInformation.page}</h2>
        <LogoList />
        {children}
        <div className="authorization__help">
          <h5 className="authorization__help-description">{pageInformation.description}</h5>
          <Link className="authorization__help-link" to={`/${pageInformation.to.toLowerCase()}`}>
            {pageInformation.to}
          </Link>
        </div>
      </div>
    </div>
  )
}
