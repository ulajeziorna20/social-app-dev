import { useState, useEffect } from 'react'

import axios from 'axios'
import './Login.css'
import { Link, Navigate } from 'react-router-dom'

const Login = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [dataLoggedUser, setDataLoggedUser] = useState({
    jwt: '',
    userName: '',
    ttl: '',
    error: true
  })

  const [errorLogin, setErrorLogin] = useState(true)

  const handelChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  const handelFormSubmit = (e) => {
    e.preventDefault()
    let postData = {
      password: formData.password,
      username: formData.username
    }

    axios.post('https://akademia108.pl/api/social-app/user/login', postData, axiosConfig).then((res) => {
      console.log(res)

      if (res.data.error === false) {
        setDataLoggedUser({
          jwt: res.data.jwt_token,
          userName: res.data.username,
          ttl: res.data.ttl,
          error: res.data.error
        })

        setErrorLogin(false)
      }
    })
  }

  useEffect(() => {
    if (dataLoggedUser.jwt === '' && dataLoggedUser.userName === '' && dataLoggedUser.ttl === '') {
      // console.log('bez zapisu do lacaleStorage')
    } else {
      // console.log('zapis do local storage')
      localStorage.setItem('dataLoggedData', JSON.stringify(dataLoggedUser))
    }
  }, [dataLoggedUser])

  useEffect(() => {
    if (errorLogin === false) {
      props.isAuthenticated('accept')
    }
  }, [errorLogin])

  return (
    <div>
      {errorLogin === false && <Navigate replace to='/' />}
      <h2 className='login-title'>Login</h2>

      <form className='form-login' onSubmit={handelFormSubmit}>
        <div className='container'>
          <label htmlFor='uname'>
            <b>Username</b>
          </label>
          <input
            type='text'
            placeholder='Enter Username'
            name='username'
            id='username'
            value={formData.username}
            onChange={handelChange}
          />
          <p className='error'></p>
          <br />
          <label htmlFor='password'>
            <b>Password</b>
          </label>
          <input
            type='password'
            placeholder='Enter password'
            name='password'
            id='password'
            value={formData.password}
            onChange={handelChange}
          />
          <p className='error'></p>
          <br />

          <button type='submit'>Login</button>
          <br />
          <label>
            <input type='checkbox' name='remember' /> Remember me
          </label>
        </div>

        <div className='container-bottom'>
          <button type='button' className='cancelbtn'>
            Cancel
          </button>
          <span className='psw'>
            Forgot <a href='#'>password?</a>
          </span>
          <nav>
            <ul>
              <li className='nav-item'>
                <Link to='/signup' className='link'>
                  Sign Up!
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </form>
      {/* <Authenticated errorLogin={errorLogin} /> */}
    </div>
  )
}

export default Login
