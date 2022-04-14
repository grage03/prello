import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './style/styles.module.sass'
import { UiLink, UiLogo } from '../../../../../core/components/ui-components'
import { navigationOptions } from '../../enums'

const Burger = () => {
  const { t } = useTranslation()
  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <>
      <div className={styles['burger__icon']} onClick={() => setIsOpen(true)}>
        <span />
        <span />
        <span />
      </div>
      {
        isOpen && (
          <div className={styles['burger__wrapper']}>
            <div className={styles['burger__menu']}>
              <h3 className={styles['burger__close']} onClick={() => setIsOpen(false)}>close</h3>
              <nav className="burger__navigation">
                <ul>
                  {
                    navigationOptions.map((item) => (
                      <div className={styles['burger__navigation-list']}>
                        <UiLogo logo={item.logo} size="small" borderStyle="border" />
                        <li key={item.option} className={styles['burger__navigation-item']}>
                          <UiLink>{t(`translation:${item.name}`)}</UiLink>
                        </li>
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
