import React, { useContext } from 'react'

import './styles/style.sass'

import { Button } from '../ui-components/Button'

import { UserContext } from '../../../domain/user/store'

export const Header = () => {
  const { user } = useContext(UserContext)

  return (
    <header className='header'>
      <div className='header__logo'>
        <h1>logo</h1>
      </div>
      <div className='header__navigation'>
        <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </nav>
      </div>

      {user.getUser()
        ? <Button />
        : <h1>user not login</h1>
      }
    </header>
  )
}