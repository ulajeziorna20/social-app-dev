import './Popup.css'

import Login from '../../components/login/Login'

const Popup = (props) => {
  return (
    <section className='active'>
      <div className='login-popup'>
        <div className='closeBtn' onClick={() => props.closePopup()}>
          close
        </div>
        <div className='popup-box solid'>
          <Login isAuthenticated={props.isAuthenticated} isAuth={props.isAuth} />
        </div>
      </div>
    </section>
  )
}

export default Popup
