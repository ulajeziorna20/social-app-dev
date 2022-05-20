import './App.css'

import { useState } from 'react'

import { Link, Navigate, Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
import HomeLoggedIn from './components/homeLoggedIn/HomeLoggedIn'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'

const App = (props) => {
  const [isAuth, setIsAuth] = useState(false)

  const isAuthenticated = (response) => {
    console.log('callback z Loginu')
    if (response === 'accept') {
      setIsAuth(true)
    }
  }
  return (
    <div className='background-container'>
      <nav className='nav'>
        <ul>
          <li className='nav-item'>
            <Link to='/' className='link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/signup' className='link'>
              Sign Up!
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/login' className='link'>
              Login
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='link'>
              Logout
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/homeLoggedIn' className='link'>
              HomeLogged
            </Link>
          </li>
        </ul>
      </nav>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login isAuthenticated={isAuthenticated} />} />
          <Route path='homeLoggedIn' element={<HomeLoggedIn />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
