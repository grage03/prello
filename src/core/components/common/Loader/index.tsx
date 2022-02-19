import React from 'react'
import './styles/styles.sass'

export const Loader = () => {
  return (
    <div className="wrapper">
      <div className="loader">
        <div className="loader__item" />
        <div className="loader__item" />
        <div className="loader__item" />
        <div className="loader__item" />
      </div>
    </div>
  )
}
