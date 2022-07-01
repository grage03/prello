import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './style/styles.module.sass'
import { Icon } from '../../../../ui-components'
import { navigationOptions } from '../../enums'
import { Anchor } from '../../../../app'
import { useClickOutside } from '../../../../../hooks'
import { Namespace } from '../../../../../lib'

const Burger = () => {
  const { t } = useTranslation<Namespace[]>(['header__layout'])
  const { isOpen, setIsOpen, element } = useClickOutside(false)

  const handleOpenBurgerMenu = () => setIsOpen(true)
  const handleCloseBurgerMenu = () => setIsOpen(false)

  return (
    <>
      <div className={styles['burger__icon']} onClick={handleOpenBurgerMenu}>
        {Array.from([...Array(3)].keys()).map((_, index) => (
          <span key={index} />
        ))}
      </div>
      {
        isOpen && (
          <div className={styles['burger__wrapper']} data-test-id="burger-menu-inner">
            <div className={styles['burger__menu']} ref={element}>
              <div className={styles['burger__menu-title']}>
                <h3
                  className={styles['burger__close']}
                  onClick={handleCloseBurgerMenu}
                  data-test-id="burger-menu-close"
                >
                  {t('header__layout:go-back')}
                </h3>
              </div>
              <nav className={styles['burger__navigation']}>
                <ul className={styles['burger__navigation-list']}>
                  {
                    navigationOptions.map((item) => (
                      <div className={styles['burger__navigation-item']} key={item.option}>
                        <div className={styles['burger__navigation-icon']}>
                          <Icon icon={<item.icon />} size={24} viewBox="0 0 16 16" fill="none" />
                        </div>
                        <li
                          key={item.option}
                          className={styles['burger__navigation-link']}
                          onClick={handleCloseBurgerMenu}
                        >
                          <Anchor anchor={item.option}>{t(`header__layout:${item.option}`)}</Anchor>
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
