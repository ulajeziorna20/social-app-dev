import React, { useState, useEffect } from 'react'

import './Home.css'

import FeedNoLogin from '../feed/feed-no-login/FeedNoLogin'
import Popup from '../popup/Popup'

const Home = () => {
  const [showPopup, setShowPopup] = useState(true)

  // On componentDidMount set the timer

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
          <figure className='main-feed'>[feed other users]</figure>
          <FeedNoLogin />
        </div>
      </section>

      <footer className='footer'>© 2022 by Jeziorna Urszula Inc.</footer>
    </>
  )
}

export default Home
