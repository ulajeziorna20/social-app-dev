import React, { useState, useEffect } from 'react'

import './Home.css'

import Popup from '../popup/Popup'

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false)

  // On componentDidMount set the timer

  useEffect(() => {
    const PopUpStatusChange = () => {
      setShowPopUp(!showPopUp)
    }

    let timeId = setTimeout(() => {
      PopUpStatusChange()
    }, 10000)

    return () => {
      clearTimeout(timeId)
    }
  }, [showPopUp])

  return (
    <>
      <header className='header'>
        <h1 className='main-title'>Social App</h1>
      </header>

      <Popup showPopUp={showPopUp} />

      <section className='welcome-section'>
        <h3 className='welcome-section-header'>Do you want to join them?</h3>

        <div className='feed-container'>
          <figure className='main-feed'>[feed other users]</figure>
        </div>
      </section>

      <footer className='footer'>© 2022 by Jeziorna Urszula Inc.</footer>
    </>
  )
}

export default Home
