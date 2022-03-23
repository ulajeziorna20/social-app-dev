import './App.css'

import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Home from './components/home/Home'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'

const App = () => {
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
        </ul>
      </nav>

      <div className='stars'></div>
      <div className='twinkling'></div>
      <div className='clouds'></div>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </div>
      {/* <footer className='footer'>© 2022 by Jeziorna Urszula Inc.</footer> */}
    </div>
  )
}

export default App
