import React from 'react'
import i18n from 'i18next'

import styles from './style/styles.module.sass'
import { LogoIcon } from '../../../assets/icon'
import { Icon, Select, Storage } from '../../../core'
import { KeyType } from './interface'

const servicesPlaceholder = [
  { name: "Email Marketing", to: "" },
  { name: "Campaigns", to: "" },
  { name: "Branding", to: "" },
  { name: "Offline", to: "" },
]

const aboutPlaceholder = [
  { name: "Our Story", to: "" },
  { name: "Benefits", to: "" },
  { name: "Team", to: "" },
  { name: "Careers", to: "" },
]

const followPlaceholder = [
  { name: "Facebook", to: "" },
  { name: "Twitter", to: "" },
  { name: "Instagram", to: "" },
]

export const Footer = () => {
  const storage = new Storage('local')

  const changeLocale = async (key: KeyType) => {
    if (i18n.language === key) return
    await i18n.changeLanguage(key)
  }

  return (
    <footer className={styles['footer']} data-test-id="footer">
      <div className={styles['footer__description']}>
        <div className={styles['footer__description-logo']}>
          <div className={styles['footer__description-language']}>
            <Icon size={60} viewBox="0 0 70 70" icon={<LogoIcon />} />
            <Select
              label={storage.getItem('i18nextLng')}
              selectItems={[ 'en', 'ru' ]}
              onClickItem={changeLocale}
              customAttributes={{
                'data-test-id': 'change-language',
              }}
            />
          </div>
          <p className={styles['footer__description-text']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <div className={styles['footer__navigation']}>
          <div className="footer__navigation-item">
            <h3>Services</h3>
            {
              servicesPlaceholder.map((item, index) => (
                <p key={index} className={styles['footer__navigation-link']}>{item.name}</p>
              ))
            }
          </div>
          <div className="footer__navigation-item">
            <h3>About</h3>
            {
              aboutPlaceholder.map((item, index) => (
                <p key={index} className={styles['footer__navigation-link']}>{item.name}</p>
              ))
            }
          </div>
          <div className="footer__navigation-item">
            <h3>Follow Us</h3>
            {
              followPlaceholder.map((item, index) => (
                <p key={index} className={styles['footer__navigation-link']}>{item.name}</p>
              ))
            }
          </div>
        </div>
      </div>
      <div className={styles['footer__copyright']}>
        <h5>
          Copyright ©
          {new Date().getFullYear()}
          .Prello. All rights reserved.
        </h5>
      </div>
    </footer>
  )
}
