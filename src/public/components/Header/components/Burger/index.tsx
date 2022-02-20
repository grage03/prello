import React, { useState } from 'react'

import './style/styles.sass'
import { UiLink } from '../../../../../core/components/ui-components'
import { navigationOptions } from '../../enums'

const Burger = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <>
      <div className="burger__icon" onClick={() => setIsOpen(true)}>
        <span />
        <span />
        <span />
      </div>
      {
        isOpen && (
          <div className="burger__wrapper">
            <div className="burger__menu">
              <h3 className="burger__close" onClick={() => setIsOpen(false)}>Close</h3>
              <nav className="burger__navigation">
                <ul>
                  {
                    navigationOptions.map((item) => (
                      <li key={item.option} className="burger__navigation-item">
                        <UiLink>{item.name}</UiLink>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Burger
