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

    let timeId = setTimeout(() => {
      PopUpStatusChange()
    }, 5000)

    return () => {
      clearTimeout(timeId)
    }
  }, [])

  const closePopup = () => {
    setShowPopup(true)
  }

  return (
    <>
      <header className='header'>
        <h1 className='main-title'>Social App</h1>
      </header>

      {showPopup ? '' : <Popup closePopup={closePopup} />}

      <section className='welcome-section'>
        <h3 className='welcome-section-header'>Do you want to join them?</h3>

        <div className='feed-container'>
          <FeedNoLogin />
        </div>
      </section>
    </>
  )
}

export default Home
