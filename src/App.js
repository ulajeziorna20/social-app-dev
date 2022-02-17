import './App.css'

import { Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'

const App = () => {
  return (
    <div className='background-container'>
      <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png' alt='fgerger' />
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
    </div>
  )
}

export default App
