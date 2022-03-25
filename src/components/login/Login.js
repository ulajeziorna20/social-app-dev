import './Login.css'

const Login = () => {
  return (
    <div>
      <h2 className='login-title'>Login Form</h2>

      <form className='form-login'>
        {/* <div className='img-container'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlLYn489vbY06yAHAHQ11W6MGlC9Sprs-jw&usqp=CAU'
            alt='Avatar'
            className='avatar'
          />
        </div> */}

        <div className='container'>
          <label htmlFor='uname'>
            <b>Username</b>
          </label>
          <input type='text' placeholder='Enter Username' name='uname' id='uname' required />

          <label htmlFor='email'>
            <b>Email</b>
          </label>
          <input type='email' placeholder='Enter email' name='email' id='email' required />

          <label htmlFor='psw'>
            <b>Password</b>
          </label>
          <input type='password' placeholder='Enter Password' name='psw' id='psw' required />

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
