import { useState, useEffect } from 'react'

import axios from 'axios'
import './FeedNoLogin.css'

const FeedNoLogin = () => {
  const [feedNoLogin, setFeedNoLogin] = useState([])

  const getDate = () => {
    axios
      .post('https://akademia108.pl/api/social-app/post/latest', {
        mode: 'corse'
      })
      .then((res) => {
        // console.log(res.data)
        let feedNoLoginList = []

        for (const [userIndex, userData] of Object.entries(res.data)) {
          // console.log(userIndex)
          // console.log(userData)
          // console.log(userData.content)
          let userFeedNoLogin = {
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
        // console.log(feedNoLoginList)
        setFeedNoLogin(feedNoLoginList)
      })
  }

  useEffect(() => {
    getDate()
  }, [])

  let feedNoLoginList = feedNoLogin.map((userObj) => {
    return (
      <figure className='post' key={userObj.id}>
        <img id='post-avatar' src={userObj.user.avatar} alt='avatar' />
        <h6>{userObj.user.username}</h6>
        <p className='content'>{userObj.post.content}</p>
      </figure>
    )
  })

  return <section className='post-box'>{feedNoLoginList}</section>
}

export default FeedNoLogin
