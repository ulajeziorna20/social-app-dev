import './PopUp.css'


const PopUp = (showPopUp) => {


  return (
    <>
      <section className={`${!showPopUp ? '' : 'active'}   popup`}>
        <div className='login-popup'>
          <div className='popup-box solid'>
            <form className='form'>
              <h1 className='login-header'>Sign in!</h1>
              <label htmlFor="userName">Username</label><br />
              <input
                type="text"
                name='userName'
                id='userName'
                className='login-box' /><br />
              <label htmlFor="password">Password</label><br />
              <input
                type="password"
                name='password'
                id="password" className='login-box' /><br /><br />
              <input
                type='submit'
                value='LOGIN'
                className='login-btn' />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}



export default PopUp