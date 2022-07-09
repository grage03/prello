import React from 'react'

import styles from './style/styles.module.sass'

const administrationPlaceholder = [
  {
    name: 'Alex Grage',
    email: '@alexgrage',
  },
]

export const About = () => {
  return (
    <section>
      <div>
        <h4>Board administration</h4>
        <ul className={styles['about__administration']}>
          {administrationPlaceholder.map((item, index) => (
            <li className={styles['about__administration-item']} key={index}>
              <div className={styles['about__administration-avatar']} />
              <div>
                <h4>{item.name}</h4>
                <h5>{item.email}</h5>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Description</h4>
      </div>
    </section>
  )
}
