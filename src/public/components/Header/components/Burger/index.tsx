import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import './style/styles.sass'
import { UiIcon, UiLink } from '../../../../../core/components/ui-components'
import { navigationOptions } from '../../enums'

const Burger = () => {
  const { t } = useTranslation()
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
              <div className="burger__close" onClick={() => setIsOpen(false)}>
                <div className="close__icon"> </div>
                <div className="close__string">Navigation</div>
              </div>
              <nav className="burger__navigation">
                <ul>
                  {
                    navigationOptions.map((item) => (
                      <div className="burger__navigation-item" key={item.option}>
                        <div className="navigation_icon">
                          <UiIcon icon={<item.icon />} />
                        </div>
                        <div className="navigation_string">
                          <UiLink>{t(`translation:${item.name}`)}</UiLink>
                        </div>
                      </div>
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
