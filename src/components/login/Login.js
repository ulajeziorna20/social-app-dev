import { useState } from 'react'
import { useEffect } from 'react'
import './Login.css'

const Login = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handelChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handelFormSubmit = (e) => {
    e.preventDefault()

    setFormErrors(validate(formData))
    setIsSubmit(true)
  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData)
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.username) {
      errors.usernameError = '* Username is required!'
    }
    if (!values.email) {
      errors.emailError = '* Email is required!'
    } else if (regex.test(values.email)) {
      formErrors.emailError = '* This is not a valid email form!'
    }
    if (!values.password) {
      errors.passwordError = '* Password is required!'
    }
    return errors
  }

  return (
    <div>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className='message success'>Signed in successfully !</div>
      ) : (
        <div className='empty'></div>
      )}
      <h2 className='login-title'>Login Form</h2>

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
          <p className='error'>{formErrors.usernameError}</p>
          <br />
          <label htmlFor='email'>
            <b>Email</b>
          </label>
          <input
            type='email'
            placeholder='Enter email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handelChange}
          />
          <p className='error'>{formErrors.emailError}</p>
          <br />
          <label htmlFor='psw'>
            <b>Password</b>
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            name='password'
            id='password'
            value={formData.password}
            onChange={handelChange}
          />
          <p className='error'>{formErrors.passwordError}</p>
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
        </div>
      </form>
    </div>
  )
}

export default Login
