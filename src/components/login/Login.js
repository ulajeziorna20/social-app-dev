import { useState } from 'react'
import './Login.css'

const Login = () => {
  const [dataForm, setDataForm] = useState({ userName: '', email: '', password: '' })
  const [errorValidate, setErrorValidate] = useState({ errorUserName: '' })

  const validationUserName = () => {
    if (dataForm.userName.trim().length < 4) {
      setErrorValidate((errorValidate.errorUserName = 'min 4 znaki'))
    } else {
      console.log(`jestem w elsie`)
      setErrorValidate((errorValidate.errorUserName = ''))
    }
  }

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
            onChange={validationUserName}
            // onKeyUp={() => {
            //   validationUserName()
            // }}
            required
          />
          {console.log(errorValidate.errorUserName)}
          <span className='error'>{errorValidate.errorUserName}</span>
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
          <span className='error'></span>
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
          <span className='error'></span>
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
