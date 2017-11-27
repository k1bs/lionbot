import React from 'react'
import { Link } from 'react-router-dom'

// created basic landing page
const Home = () => {
  return (
    <div className='home'>
      <div className='home'>
        <h1>Introducing, the King of all <span className='home_heading'>bots</span>.</h1>
        <div id='lionbot_logo' />
      </div>
      <p>LionBot is a new way to improve your stream. With the ability to create custom automated responses, you can focus on the game and let LionBot handle the chat.</p>

      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
      </ul>
    </div>
  )
}

export default Home
