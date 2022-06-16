import React, { useState, useEffect } from 'react'

import './Home.css'

import FeedNoLogin from '../feed/feed-no-login/FeedNoLogin'
import Popup from '../popup/Popup'

const Home = () => {
  const [showPopup, setShowPopup] = useState(true)

  useEffect(() => {
    const PopUpStatusChange = () => {
      setShowPopup(!showPopup)
    }

    const timeId = setTimeout(() => {
      PopUpStatusChange()
    }, 5000)

    return () => {
      clearTimeout(timeId)
    }
  }, [showPopup])

  const closePopup = () => {
    setShowPopup(true)
  }

  return (
    <div>
      <section className='flex-container'>
        <header className='header'>
          <h1 className='main-title'>Social App</h1>
          <h3 className='welcome-section-header'>Do you want to join them?</h3>
          <hr id='line-header' />
        </header>

        <section className='feed-section'>
          <FeedNoLogin />
        </section>
      </section>

      {showPopup ? '' : <Popup closePopup={closePopup} />}
    </div>
  )
}

export default Home
