import React, { useState } from 'react'

import axios from 'axios'

const FeedNoLogin = (props) => {
  const [feedNoLogin, setFeedNoLogin] = useState()

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
        console.log(feedNoLoginList)
        // setFeedNoLogin(feedNoLoginList)
      })
  }

  getDate()

  return <></>
}

export default FeedNoLogin
