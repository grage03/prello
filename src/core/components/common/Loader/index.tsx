import React from 'react'

import './styles/styles.sass'

export const Loader = () => {
  return (
    <div className="wrapper">
      <div className="loader">
        {Array.from([...Array(4)].keys()).map((item) => (
          <div className="loader__item" key={item} />
        ))}
      </div>
    </div>
  )
}
