import React from 'react'

import './style/styles.sass'
import { LogoIcon } from '../../../assets/icon/app/logo'
import { UiIcon } from '../../../core/components/ui-components'

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
  return (
    <footer className="h-container footer">
      <div className="footer__description">
        <div className="footer__description-logo">
          <UiIcon size={60} viewBox="0 0 70 70">
            <LogoIcon />
          </UiIcon>
          <p className="footer__description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <div className="footer__navigation">
          <div className="footer__navigation-item">
            <h3>Services</h3>
            {
              servicesPlaceholder.map((item, index) => (
                <p key={index} className="footer__navigation-link">{item.name}</p>
              ))
            }
          </div>
          <div className="footer__navigation-item">
            <h3>About</h3>
            {
              aboutPlaceholder.map((item, index) => (
                <p key={index} className="footer__navigation-link">{item.name}</p>
              ))
            }
          </div>
          <div className="footer__navigation-item">
            <h3>Follow Us</h3>
            {
              followPlaceholder.map((item, index) => (
                <p key={index} className="footer__navigation-link">{item.name}</p>
              ))
            }
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <h5>
          Copyright ©
          {new Date().getFullYear()}
          .Prello. All rights reserved.
        </h5>
      </div>
    </footer>
  )
}
