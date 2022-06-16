import React, { useState, useEffect, useMemo } from 'react'

import './Home.css'
import useIsFirstRender from '../../customHooks/useIsFirstRender'
import Popup from '../../pages/popup/Popup'

const Home = (props) => {
  const [showPopup, setShowPopup] = useState(false)

  // On componentDidMount set the timer
  const isFirst = useIsFirstRender()

  useEffect(() => {
    const PopUpStatusChange = () => {
      setShowPopup(!showPopup)
    }
    if (isFirst) {
      const timeId = setTimeout(() => {
        PopUpStatusChange()
      }, 5000)

      return () => {
        clearTimeout(timeId)
      }
    }
  }, [showPopup, isFirst])

  const closePopup = () => {
    setShowPopup(false)
  }

  return (
    <>
      <header className='header'>
        <h1 className='main-title'>Social App</h1>
      </header>

      {showPopup ? <Popup isAuthenticated={props.isAuthenticated} isAuth={props.isAuth} closePopup={closePopup} /> : ''}

      <section className='welcome-section'>
        <h3 className='welcome-section-header'>Do you want to join them?</h3>

        <div className='feed-container'>
          <figure className='main-feed'>[feed other users]</figure>
        </div>
      </section>

      <footer className='footer'>© 2022 by Jeziorna Urszula Inc.</footer>
      <p>Is first render: {isFirst ? 'yes' : 'no'}</p>
    </>
  )
}

export default Home
