import React from 'react'
import './style/styles.sass'

const PublicPage = () => {
  const message = 'message'
  return (
    <div>
      <aside>{message}</aside>
      <div className="test">
        <div>
          font
          <h1>Helps everyone</h1>
          <h2>Helps everyone</h2>
          <h3>Helps everyone</h3>
          <h4>Helps everyone</h4>
          <h5>
            Выбирай, какие уведомления и где ты хочешь получать — в Телеграм, на емейл или в виде браузерных и
            мобильных пушей.
          </h5>
          <p>
            Выбирай, какие уведомления и где ты хочешь получать — в Телеграм, на емейл или в виде браузерных и
            мобильных пушей.
          </p>
          <em>Helps everyone</em>
        </div>
      </div>
    </div>
  )
}

export default PublicPage
