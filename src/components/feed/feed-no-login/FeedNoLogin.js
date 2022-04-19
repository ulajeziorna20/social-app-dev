import { useState, useEffect, useRef } from 'react'

import axios from 'axios'
import './FeedNoLogin.css'
import uniqueId from 'lodash.uniqueid'

const FeedNoLogin = () => {
  const [feedNoLogin, setFeedNoLogin] = useState([])
  // const [pageNumber, setPageNumber] = useState[1]

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
        console.log(feedNoLoginList)

        setFeedNoLogin(feedNoLoginList)
      })
  }

  useEffect(() => {
    getData()
  }, [])

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
      <section className='post-box'>{feedNoLoginList}</section>
    </div>
  )
}

export default FeedNoLogin