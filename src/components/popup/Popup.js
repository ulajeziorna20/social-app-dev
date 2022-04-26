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
            <h2 className='login-title'>Login</h2>

            <form className='form-login'>
              <div className='container'>
                <label htmlFor='uname'>
                  <b>Username</b>
                </label>
                <input type='text' placeholder='Enter Username' name='username' id='username' />
                <p className='error'></p>
                <br />
                <label htmlFor='email'>
                  <b>Email</b>
                </label>
                <input type='email' placeholder='Enter email' name='email' id='email' />
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
