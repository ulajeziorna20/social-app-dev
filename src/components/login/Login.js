import { useState } from 'react'
import './Login.css'

const Login = () => {
  const [dataForm, setDataForm] = useState({
    userName: '',
    email: '',
    password: '',
    formErrors: { userNameError: '', emailError: '', passwordError: '' },
    userNameValid: false,
    emailValid: false,
    passwordValid: false
  })

  const handelUserName = (e) => {
    // e.preventDefault()

    // console.log(e.target.name)
    if (e.target.name === 'uname') {
      // console.log(e.target.name)
      setDataForm({ userName: e.target.value })
    } else if (e.target.name === 'email') {
      // console.log(e.target.name)
      setDataForm({ email: e.target.value })
    } else if (e.target.name === 'psw') {
      // console.log(e.target.name)
      setDataForm({ password: e.target.value })
    }

    // if (dataForm.userName.trim().length < 4) {
    //   // console.log(dataForm.userName)
    //   setErrorValidate((errorValidate.errorUserName = 'min 4 znaki'))
    // } else {
    //   // console.log(`jestem w elsie`)
    //   setErrorValidate((prevState) => {
    //     prevState.errorUserName = ''
    //   })
    // }
  }

  const validationEmail = () => {
    // if (dataForm.userName.trim().length < 4) {
    //   setErrorValidate((errorValidate.errorUserName = 'min 4 znaki'))
    // } else {
    //   console.log(`jestem w elsie`)
    //   setErrorValidate((errorValidate.errorUserName = ''))
    // }
  }

  const validationPassword = () => {
    // if (dataForm.userName.trim().length < 4) {
    //   setErrorValidate((errorValidate.errorUserName = 'min 4 znaki'))
    // } else {
    //   console.log(`jestem w elsie`)
    //   setErrorValidate((errorValidate.errorUserName = ''))
    // }
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
            onChange={handelUserName}
            // onKeyUp={() => {
            //   validationUserName()
            // }}
            required
          />
          {/* {console.log(errorValidate.errorUserName)} */}
          {/* <span className='error'>{errorValidate.errorUserName}</span> */}
          {/* 
          {errors.name && errors.name.type === 'required' && <span role='alert'>This is required</span>}
          {errors.name && errors.name.type === 'maxLength' && <span role='alert'>Max length exceeded</span>} */}

          <label htmlFor='email'>
            <b>Email</b>
          </label>
          <input
            type='email'
            placeholder='Enter email'
            name='email'
            id='email'
            value={dataForm.email}
            onChange={handelUserName}
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
            onChange={handelUserName}
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
