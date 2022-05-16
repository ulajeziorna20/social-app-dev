import './Popup.css'

import { Link } from 'react-router-dom'

import Login from '../login/Login'

const Popup = (props) => {
  return (
    <>
      <section className='active'>
        <div className='login-popup'>
          <div className='closeBtn' onClick={props.closePopup}>
            close
          </div>
          <div className='popup-box solid'>
            <Login />
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
