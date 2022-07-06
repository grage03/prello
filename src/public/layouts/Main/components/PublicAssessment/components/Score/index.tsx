import React from 'react'

import { Icon } from '../../../../../../../core'
import { IScoreProps } from './interface/interface'
import { FullStar, HalfEmptyStar } from '../../../../../../../assets/icon'

export const Score = ({ score }: IScoreProps) => {
  return (
    <>
      {
        Array.from([...Array(Math.trunc(score))].keys()).map((_, index) => (
          <Icon size={40} viewBox="0 0 40 40" key={index} icon={<FullStar />} />
        ))
      }
      {!!(score % 1) && <Icon size={40} viewBox="0 0 40 40" icon={<HalfEmptyStar />} />}
    </>
  )
}
