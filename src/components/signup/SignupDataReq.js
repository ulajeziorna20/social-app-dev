import { useState, useEffect } from 'react'

import axios from 'axios'
import './SignupDataReq.css'

const SignupDataReq = (props) => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  const signupData = () => {
    let postData = {
      username: props.formData.username,
      password: props.formData.password,
      email: props.formData.email
    }

    axios
      .post('https://akademia108.pl/api/social-app/user/signup', postData, JSON.stringify(axiosConfig))
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {})
  }

  useEffect(() => {
    signupData()
  }, [props.isSubmit])

  return <div></div>
}

export default SignupDataReq
