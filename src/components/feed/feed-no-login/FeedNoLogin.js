import axios from 'axios'

const FeedNoLogin = (props) => {
  const getDate = () => {
    axios
      .post('https://akademia108.pl/api/social-app/post/latest', {
        mode: 'corse'
      })
      .then((res) => {
        console.log(res)
      })
  }

  getDate()

  return <></>
}

export default FeedNoLogin
