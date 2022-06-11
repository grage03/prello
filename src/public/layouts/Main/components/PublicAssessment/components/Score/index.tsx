import React from 'react'
import { IScoreProps } from './interface/interface'
import { UiIcon } from '../../../../../../../core/components'
import { FullStar, HalfEmptyStar } from '../../../../../../../assets/icon'

export const Score = ({ score }: IScoreProps) => {
  return (
    <>
      {
        Array.from([ ...Array(Math.trunc(score)) ].keys()).map((_, index) => (
          <UiIcon size={40} viewBox="0 0 40 40" key={index} icon={<FullStar />} />
        ))
      }
      {!!(score % 1) && <UiIcon size={40} viewBox="0 0 40 40" icon={<HalfEmptyStar />} />}
    </>
  )
}
