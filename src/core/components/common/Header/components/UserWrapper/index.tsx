import React from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Button } from '../../../../ui-components'
import { useUser } from '../../../../../../domain/hooks/useUser'

export const UserWrapper = observer(() => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { user } = useUser()
  const { t } = useTranslation()

  const onUserLogin = () => {
    if (pathname === '/login') throw new Error('You are already on the authorization page!')
    navigate('/login')
  }

  return (
    <div>
      {
        user.profile
          ? <h3>{user.profile.email}</h3>
          : <Button description={t(`translation:user-login`)} onClick={onUserLogin} />
      }
    </div>
  )
})
