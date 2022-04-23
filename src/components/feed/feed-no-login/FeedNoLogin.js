import { useState, useEffect, useRef } from 'react'

import axios from 'axios'
import './FeedNoLogin.css'
import uniqueId from 'lodash.uniqueid'

const FeedNoLogin = (props) => {
  const [feedNoLogin, setFeedNoLogin] = useState([])

  const getData = () => {
    axios
      .post('https://akademia108.pl/api/social-app/post/latest', {
        mode: 'corse'
      })
      .then((res) => {
        let feedNoLoginList = []

        for (const userData of res.data) {
          let userFeedNoLogin = {
            feedId: uniqueId(),
            post: {
              postId: userData.id,
              content: userData.content,
              created_at: userData.created_at
            },
            user: {
              userId: userData.user.id,
              username: userData.user.username,
              email: userData.user.email,
              created_at: userData.user.created_at,
              avatar: userData.user.avatar_url
            }
          }
          feedNoLoginList.push(userFeedNoLogin)
        }

        if (props.loading === false) {
          console.log('i am loading')
        }
        setFeedNoLogin((prevData) => [...prevData, ...feedNoLoginList])
        props.setLoading()
      })
  }

  // useEffect(() => {
  //   getData()
  // }, [])

  useEffect(() => {
    getData()
  }, [props.loadNumber])

  //  Intersection observer

  const numSteps = 20.0

  let boxElement
  let prevRatio = 0.0
  let increasingColor = 'rgba(40, 40, 190, ratio)'
  let decreasingColor = 'rgba(190, 40, 40, ratio)'

  // Set things up
  // window.addEventListener(
  //   'load',
  //   (event) => {
  //     boxElement = document.querySelector('#box')

  //     createObserver()
  //   },
  //   false
  // )

  let feedNoLoginList = feedNoLogin.map((userObj) => {
    return (
      <figure className='post' key={uniqueId('prefix')}>
        <img id='post-avatar' src={userObj.user.avatar} alt='avatar' />
        <h6>{userObj.user.username}</h6>
        <p className='content'>{userObj.post.content}</p>
      </figure>
    )
  })

  return (
    <div>
      <section className='post-box'>
        {feedNoLoginList}
        <div>HalloUla</div>
      </section>
    </div>
  )
}

export default FeedNoLogin
