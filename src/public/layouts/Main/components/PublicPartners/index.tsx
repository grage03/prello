import React from 'react'
import { useTranslation } from 'react-i18next'

import { Logo, Namespace } from '../../../../../core'
import { partners } from './enum'
import { Sparks } from '../../../../components'
import { Sizes } from '../../../../components/Sparks/interface'

import styles from './style/styles.module.sass'

const sparksPosition = {
  top: 40,
  left: 20,
}

export const PublicPartners = () => {
  const { t } = useTranslation<Namespace[]>(['public__layout'])

  return (
    <div className="partners" id="partners" data-test-id="public-partners">
      <div className={styles['partners__title']} data-aos="fade-right" data-aos-duration="1000">
        <Sparks size={Sizes.SMALL} position={sparksPosition} rotate={120}>
          <h2>{t('public__layout:partners-title')}</h2>
        </Sparks>
        <h4>{t('public__layout:partners-description')}</h4>
      </div>
      <div className={styles['partners__list']}>
        {
          partners.map((item, index) => (
            <div data-aos="zoom-in" data-aos-duration={`${index}000`} key={index}>
              <Logo logo={item.img} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
