import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './style/styles.module.sass'
import { UiIcon } from '../../../../../core/components/ui-components'
import { navigationOptions } from '../../enums'
import { Anchor } from '../../../../../core/components/app/Anchor'

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
              <div className={styles['burger__menu-title']}>
                <h3 className={styles['burger__close']} onClick={() => setIsOpen(false)}>
                  {t('translation:public-header-go-back')}
                </h3>
              </div>
              <nav className={styles['burger__navigation']}>
                <ul className={styles['burger__navigation-list']}>
                  {
                    navigationOptions.map((item) => (
                      <div className={styles['burger__navigation-item']} key={item.option}>
                        <div className={styles['burger__navigation-icon']}>
                          <UiIcon icon={<item.icon />} size={24} viewBox="0 0 16 16" fill="none" />
                        </div>
                        <li
                          key={item.option}
                          className={styles['burger__navigation-link']}
                          onClick={() => setIsOpen(false)}
                        >
                          <Anchor anchor={item.option}>{t(`translation:${item.name}`)}</Anchor>
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
