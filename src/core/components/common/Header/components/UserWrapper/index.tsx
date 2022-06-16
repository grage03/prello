import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Button } from '../../../../ui-components'
import { AppContext } from '../../../../../../App'

export const UserWrapper = observer(() => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { userStore } = useContext(AppContext)
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
          : <Button description={t(`translation:user-login`)} onClick={onUserLogin} />
      }
    </div>
  )
})
