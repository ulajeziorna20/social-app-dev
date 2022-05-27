import './FeedForLogged.css'

import { useState, useEffect, useRef } from 'react'

import axios from 'axios'
import uniqueId from 'lodash.uniqueid'

const FeedForLogged = () => {
  const [feedForLogged, setFeedForLogged] = useState([])
  const [loadNumber, setLoadNumber] = useState(1)
  const [loading, setLoading] = useState(false)

  const getData = () => {
    axios
      .post('https://akademia108.pl/api/social-app/post/latest', {
        mode: 'corse'
      })
      .then((res) => {
        let feedForLoggedList = []

        for (const userData of res.data) {
          let userFeedForLogged = {
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
          feedForLoggedList.push(userFeedForLogged)
        }
        setFeedForLogged((prevData) => [...prevData, ...feedForLoggedList])
        setLoading(true)
      })
  }

  useEffect(() => {
    getData()
  }, [loadNumber])

  //  Intersection observer

  const loadNumberAdd = () => {
    setLoadNumber((prevLoadNumber) => prevLoadNumber + 1)
  }

  const pageEnd = useRef()

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadNumberAdd()
          }
        },
        { threshold: 1 }
      )
      observer.observe(pageEnd.current)
    }
  }, [loading])

  let feedForLoggedListJSX = feedForLogged.map((userObj) => {
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
      <section className='post-box'>{feedForLoggedListJSX}</section>
      <div className='box'>
        <div className='loader-box' ref={pageEnd}></div>
      </div>
    </div>
  )
}

export default FeedForLogged
