import './App.css'

import { useState } from 'react'

import { Link, Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
import HomeLoggedIn from './components/homeLoggedIn/HomeLoggedIn'
import Logout from './components/logout/Logout'
import Signup from './components/signup/Signup'
import LoginPage from './pages/login-page/LoginPage'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)

  const logoutAction = () => {
    setIsAuth(false)
    localStorage.removeItem('dataLoggedUser')
  }

  let navUnloggedUsers = (
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
          <Link to='/loginPage' className='link'>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )

  let navLoggedUsers = (
    <nav className='nav'>
      <ul>
        <li className='nav-item'>
          <Link to='/' className='link' onClick={logoutAction}>
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
  )

  let routes = navUnloggedUsers

  const isAuthenticated = (response) => {
    if (response === 'accept') {
      setIsAuth(true)
    }
  }

  if (isAuth === true) {
    routes = navLoggedUsers
  }

  return (
    <div className='background-container'>
      {routes}
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home isAuthenticated={isAuthenticated} isAuth={isAuth} />} />
          <Route path='signup' element={<Signup />} />
          <Route path='loginPage' element={<LoginPage isAuthenticated={isAuthenticated} isAuth={isAuth} />} />
          <Route path='homeLoggedIn' element={<HomeLoggedIn />} />
          <Route path='logout' element={<Logout />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
