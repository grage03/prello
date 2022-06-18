import React, { useState } from 'react'

import styles from './style/styles.module.sass'
import { Icon } from '../../../../../core'
import { SecondMenu, AddBoard } from '../../../../../assets/icon'
import { BoardGroup } from '../../../../components'
import { BoardListFull } from './components'

export const boardGroupsPlaceholder = [
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
  const [ fullBoardList, setFullBoardList ] = useState(false)

  const openFillList = () => setFullBoardList(true)
  const closeFullList = () => setFullBoardList(false)

  if (fullBoardList) return <BoardListFull closeFullList={closeFullList} />
  return (
    <section className={styles['board-list']}>
      <div className={styles['board-list__icon']} onClick={openFillList}>
        <Icon icon={<SecondMenu />} size={22} viewBox="0 0 26 20" />
      </div>
      <div className={styles['board-list__items']}>
        {
          boardGroupsPlaceholder.map((item) => (
            <BoardGroup color={item.color} key={item.key} />
          ))
        }
        <div className={styles['board-list__items-add']}>
          <Icon icon={<AddBoard />} viewBox="0 0 44 44" size={44} />
        </div>
      </div>
    </section>
  )
}
