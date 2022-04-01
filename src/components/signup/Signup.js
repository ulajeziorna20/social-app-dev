import { useState } from 'react'
import { useEffect } from 'react'
import './Signup.css'

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' })
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

    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
    let hasNumber = /\d/
    let format = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/

    if (!values.username) {
      errors.usernameError = '* Username is required!'
    } else if (values.username.trim().length < 4) {
      // console.log(values.username.trim().length)
      errors.usernameError = '* Username has to have min. 4 chars!'
    } else if (values.username.includes(' ')) {
      // console.log(values.username.trim().length)
      errors.usernameError = "* Username doesn'\t have to have white chars!"
    }

    if (!values.email) {
      errors.emailError = '* Email is required!'
    } else if (values.email.trim().length < 4) {
      errors.emailError = '* Email has to have min. 4 chars!'
    } else if (values.email.includes(' ')) {
      // console.log(values.username.trim().length)
      errors.emailError = "* Email doesn'\t have to have white chars!"
    } else if (!regex.test(values.email)) {
      errors.emailError = '* This is not a valid email form!'
    }

    if (!values.password) {
      errors.passwordError = '* Password is required!'
    } else if (values.password.trim().length < 6) {
      console.log(values.password)
      errors.passwordError = '* Password has to have min. 6 chars!'
    } else if (values.password.includes(' ')) {
      console.log(values.password)
      errors.passwordError = "* Password doesn'\t have to have white chars!"
    } else if (!values.password.match(hasNumber) >= 1) {
      errors.passwordError = '* Password has to have min. 1 number!'
    } else if (!format.test(values.password) >= 1) {
      errors.passwordError = '* Password has to have min. 1 special character!'
    }

    if (!values.confirmPassword) {
      errors.confirmPasswordError = '* You have to confirm your password!!'
      console.log(formData.password)
    } else if (!(values.confirmPassword === formData.password)) {
      errors.confirmPasswordError = '* This field should look the same as the previous one with your new password !'
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
      <h2 className='login-title'>Signup Form</h2>

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

          <label htmlFor='uname'>
            <b>Confirm password</b>
          </label>
          <input
            type='password'
            placeholder='Confirm password'
            name='confirmPassword'
            id='confirm_password'
            value={formData.confirmPassword}
            onChange={handelChange}
          />
          <p className='error'>{formErrors.confirmPasswordError}</p>
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

export default Signup
