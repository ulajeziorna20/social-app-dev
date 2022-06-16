import React from 'react'

import Login from '../../components/login/Login'

const LoginPage = (props) => {
  return (
    <div>
      <Login isAuthenticated={props.isAuthenticated} isAuth={props.isAuth} />
    </div>
  )
}

export default LoginPage
