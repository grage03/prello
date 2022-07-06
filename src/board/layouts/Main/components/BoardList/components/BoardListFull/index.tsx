import React from 'react'

import { Icon, Link } from '../../../../../../../core'
import { IBoardListFull } from './interface'
import { boardGroupsPlaceholder } from '../../index'
import { BoardGroup, CreateButton } from '../../../../../../components'

import { More } from '../../../../../../../assets/icon'
import styles from './style/styles.module.sass'

export const BoardListFull = ({ closeFullList }: IBoardListFull) => {
  return (
    <div className={styles['board-list']}>
      <div className={styles['board-list__header']}>
        <div>
          icon
        </div>
        <div onClick={closeFullList}>
          back
        </div>
      </div>
      <div>
        <div className={styles['board-list__main-header']}>
          <h3>List of boards</h3>
          <Link>all projects</Link>
        </div>
        <div className={styles['board-list__main-list']}>
          {boardGroupsPlaceholder.map((item) => (
            <div key={item.key}>
              <div className={styles['board-list__main-list-item']}>
                <BoardGroup color={item.color} key={item.key} />
                <h4>{item.key} board</h4>
              </div>
              <Icon icon={<More />} viewBox="0 0 14 4" size={16} />
            </div>
          ))}
        </div>
        <div className={styles['board-list__main-list-button']}>
          <CreateButton />
        </div>
      </div>
    </div>
  )
}
