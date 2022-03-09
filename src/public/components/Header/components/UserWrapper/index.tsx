import React from 'react'
import { observer } from 'mobx-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { userStore } from '../../../../../domain/user/store'

import { UiButton } from '../../../../../core/components/ui-components'

export const UserWrapper = observer(() => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { profile } = userStore

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
            <UiButton description="Log In" onClick={onUserLogin} />
          )
      }
    </div>
  )
})
