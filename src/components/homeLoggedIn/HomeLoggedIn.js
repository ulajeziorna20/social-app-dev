import './HomeLoggedIn.css'

import FeedForLogged from '../feed/feedForLogged/FeedForLogged'

const HomeLoggedIn = () => {
  return (
    <div>
      <section className='flex-container'>
        <header className='header'>
          <h1 className='main-title'>Social App</h1>
          <hr id='line-header' />
        </header>

        <section className='feed-section'>
          <FeedForLogged />
        </section>
      </section>
    </div>
  )
}

export default HomeLoggedIn
