import './Popup.css'

import { Link } from 'react-router-dom'

const Popup = (props) => {
  return (
    <>
      <section className='active'>
        <div className='login-popup'>
          <div className='closeBtn' onClick={props.closePopup}>
            close
          </div>
          <div className='popup-box solid'>
            <form className='form'>
              <h1 className='login-header'>Sign in!</h1>
              <label htmlFor='userName'>Username</label>
              <br />
              <input type='text' name='userName' id='userName' className='login-box' />
              <br />
              <label htmlFor='password'>Password</label>
              <br />
              <input type='password' name='password' id='password' className='login-box' />
              <br />
              <br />
              <input type='submit' value='LOGIN' className='login-btn' />
            </form>
            <Link to='/sign-up' className='link'>
              Sign Up!
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Popup
