import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'

import { reasons } from './enum'

import styles from './style/styles.module.sass'
import { Image, Link } from '../../../../../core'
import { Sparks } from '../../../../components'
import { Sizes } from '../../../../components/Sparks/interface'

const sparksPosition = {
  bottom: 100,
}

export const PublicReasons = () => {
  const { t } = useTranslation()
  const titleRef = useRef(null)

  return (
    <div className="reasons" id="reasons" data-test-id="public-reasons">
      <div className="reasons__title" ref={titleRef} data-aos="fade-up" data-aos-duration="1000">
        <Sparks quantity={2} size={Sizes.SMALL} position={sparksPosition} rotate={65}>
          <>
            <h2 className={styles['reasons__title-text']}>{t('translation:public-reasons-title')}</h2>
            <h4 className={styles['reasons__title-description']}>{t('translation:public-reasons-description')}</h4>
          </>
        </Sparks>
      </div>
      <div className={styles['reasons__list']}>
        {
          reasons.map((item, index) => (
            <div
              key={item.title}
              className={styles['reasons__item']}
              data-aos={`fade-${index % 2 ? 'left' : 'right'}`}
              data-aos-duration="1500"
            >
              <div className={styles['reasons__item-image']}>
                <Image src={item.img} />
              </div>
              <div className={styles['reasons__item-description']}>
                <h4 className={styles['reasons__item-title']}>{item.title}</h4>
                <p className={styles['reasons__item-text']}>{item.description}</p>
                <Link>{t('translation:user-more')}</Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
