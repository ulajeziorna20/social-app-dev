import React, { useState, useEffect } from "react"
import "./Home.css"
import { Link } from "react-router-dom"
import PopUp from "../popup/PopUp"


const Home = () => {

  const [show, setShow] = useState(false)
  const [showPopUp, setShowPopUp] = useState(false)


  // On componentDidMount set the timer
  useEffect(() => {
    console.log(`useEffect!`);

    let timeId = setTimeout(PopUpStatusChange, 10000)

    return () => {
      clearTimeout(timeId)
    }
  }, []);


  const PopUpStatusChange = () => {

    setShowPopUp(!showPopUp)
  }




  return (
    <>
      <nav className="nav">
        <ul>
          <li className="nav-item">
            <Link to="/sign-up" className="link" >
              Sign Up!
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="link" >
              Login
            </Link>
          </li>
        </ul>
      </nav>
      <header className="header">
        <h1 className="main-title">Social App</h1>
      </header>

      <PopUp showPopUp={showPopUp}/>

      <section className="welcome-section">
        <h3 className="welcome-section-header">Do you want to join them?</h3>


        <div className="feed-container">
          <figure className="main-feed">
            [feed other users]
          </figure>
        </div>
      </section>

      <footer className="footer">
        © 2022 by Jeziorna Urszula Inc.
      </footer>
    </>
  )
}

export default Home




