import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react'
import { useLocation, useNavigate } from 'react-router-dom'

import { UiButton } from '../../../../../core/components/ui-components'
import { Context } from '../../../../index'

export const UserWrapper = observer(() => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { userStore } = useContext(Context)
  const { t } = useTranslation()

  const onUserLogin = () => {
    if (pathname === '/login') throw new Error('You are already on the authorization page!')
    navigate('/login')
  }

  return (
    <div>
      {
        userStore.profile
          ? <h3>{userStore.profile.email}</h3>
          : (
            <UiButton description={t(`translation:user-login`)} onClick={onUserLogin} />
          )
      }
    </div>
  )
})
