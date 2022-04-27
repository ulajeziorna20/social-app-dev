import { useState } from 'react'

import axios from 'axios'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' })

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
    let postData = {
      username: formData.username,
      password: formData.password
    }
    console.log(postData.username)
    console.log(postData.password)
    axios
      .post('https://akademia108.pl/api/social-app/user/login', JSON.stringify(postData), JSON.stringify(axiosConfig))
      .then((response) => {
        console.log(response)
        console.log('wysłano zapytanie')
      })
      .catch((error) => {
        console.log(error)
      })
    e.preventDefault()
  }

  return (
    <div>
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
    </div>
  )
}

export default Login
