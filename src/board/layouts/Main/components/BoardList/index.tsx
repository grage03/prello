import React from 'react'

import styles from './style/styles.module.sass'
import { UiIcon } from '../../../../../core/components/ui-components'
import { SecondMenu } from '../../../../../assets/icon/border/SecondMenu'
import { BoardGroup } from '../../../../components/BoardGroup'
import { AddBoard } from '../../../../../assets/icon/border/AddBoard'

const boardGroupsPlaceholder = [
  {
    color: '#6563C1',
    key: 'F',
  },
  {
    color: '#E83963',
    key: 'A',
  },
  {
    color: '#6AD12B',
    key: 'E',
  },
]

export const BoardList = () => {
  return (
    <section className={styles['board-list']}>
      <div className={styles['board-list__icon']}>
        <UiIcon icon={<SecondMenu />} size={22} viewBox="0 0 26 20" />
      </div>
      <div className={styles['board-list__items']}>
        {
          boardGroupsPlaceholder.map((item) => (
            <BoardGroup color={item.color} key={item.key} />
          ))
        }
        <div className={styles['board-list__items-add']}>
          <UiIcon icon={<AddBoard />} viewBox="0 0 44 44" size={44} />
        </div>
      </div>
    </section>
  )
}
