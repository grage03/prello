import React, { useEffect, useState } from 'react'
import { ScoreProps } from './interface/interface'
import { UiIcon } from '../../../../../../../core/components/ui-components'
import { FullStar } from '../../../../../../../assets/icon/app/fullStar'
import { HalfEmptyStar } from '../../../../../../../assets/icon/app/halfEmptyStar'

// TODO rewrite with Array.fill or another
export const Score = ({ score }: ScoreProps) => {
  const [ stars, setStars ] = useState<string[]>([])

  useEffect(() => {
    for (let i = 0; i < Math.trunc(score); i += 1) {
      setStars((prevState) => [ ...prevState, "full" ])
    }
  }, [ score ])

  return (
    <>
      {stars.map((item, index) => (
        <UiIcon size={40} viewBox="0 0 40 40" key={index}>
          <FullStar />
        </UiIcon>
      ))}
      {!!(score % 1) && (
        <UiIcon size={40} viewBox="0 0 40 40">
          <HalfEmptyStar />
        </UiIcon>
      )}
    </>
  )
}
