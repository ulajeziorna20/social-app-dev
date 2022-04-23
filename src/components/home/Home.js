import React, { useState, useEffect, useRef } from 'react'

import './Home.css'

import FeedNoLogin from '../feed/feed-no-login/FeedNoLogin'
import Popup from '../popup/Popup'
import LoadingLoader from './loading-loader.gif'

const Home = () => {
  const [showPopup, setShowPopup] = useState(true)
  const [loadNumber, setLoadNumber] = useState(1)
  const [loading, setLoading] = useState(false)

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

  // intersection observer
  const setLoadingChild = () => {
    setLoading(true)
  }

  const loadNumberAdd = () => {
    setLoadNumber((prevLoadNumber) => prevLoadNumber + 1)
  }

  const pageEnd = useRef()
  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          console.log(entries)

          if (entries[0].isIntersecting) {
            loadNumberAdd()
            console.log('observer')
          }
        },
        { threshold: 1 }
      )
      observer.observe(pageEnd.current)
    }
  }, [loading])

  return (
    <div>
      <section className='flex-container'>
        <header className='header'>
          <h1 className='main-title'>Social App</h1>
          <h3 className='welcome-section-header'>Do you want to join them?</h3>
          <hr id='line-header' />
        </header>

        <section className='feed-section'>
          <FeedNoLogin loadNumber={loadNumber} setLoading={setLoadingChild} />
        </section>
      </section>

      {showPopup ? '' : <Popup closePopup={closePopup} />}

      <div className='intersection-target' ref={pageEnd}></div>
      <img src={LoadingLoader} alt='gif' />
    </div>
  )
}

export default Home
