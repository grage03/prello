import React from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { userStore } from '../../../../../domain/user/store'

import { UiButton } from '../../../../../core/components/ui-components'

export const UserWrapper = observer(() => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { profile } = userStore
  const { t } = useTranslation()

  const onUserLogin = () => {
    if (pathname === '/login') throw new Error('You are already on the authorization page!')
    navigate('/login')
  }

  return (
    <div>
      {
        profile
          ? <h3>profile</h3>
          : (
            <UiButton description={t(`translation:user-login`)} onClick={onUserLogin} />
          )
      }
    </div>
  )
})
