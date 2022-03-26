import { useState } from 'react'
import './Login.css'

const Login = () => {
  const [dataForm, setDataForm] = useState({ userName: '', email: '', password: '' })

  const validationForm = () => {}

  return (
    <div>
      <h2 className='login-title'>Login Form</h2>

      <form className='form-login'>
        <div className='container'>
          <label htmlFor='uname'>
            <b>Username</b>
          </label>
          <input
            type='text'
            placeholder='Enter Username'
            name='uname'
            id='uname'
            value={dataForm.userName}
            onChange={(e) => setDataForm({ userName: e.target.value })}
            required
          />
          <label htmlFor='email'>
            <b>Email</b>
          </label>
          <input
            type='email'
            placeholder='Enter email'
            name='email'
            id='email'
            value={dataForm.email}
            onChange={(e) => setDataForm({ email: e.target.value })}
            required
          />

          <label htmlFor='psw'>
            <b>Password</b>
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            name='psw'
            id='psw'
            value={dataForm.password}
            onChange={(e) => setDataForm({ password: e.target.value })}
            required
          />
          <button type='submit'>Login</button>
          <br />
          <label>
            <input type='checkbox' name='remember' /> Remember me
          </label>
        </div>

        <div className='container'>
          <button type='button' className='cancelbtn'>
            Cancel
          </button>
          <span className='psw'>
            Forgot <a href='#'>password?</a>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Login
