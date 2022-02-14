import React from 'react'
import { UiSelect } from '../../../core/components'

const Public = () => {
  return (
    <div>
      <UiSelect selectItems={[ '1', '2', '3', '4', '5', '6', '7', '8', '9' ]} onClickItem={() => console.log(1)} />
    </div>
  )
}

export default Public
