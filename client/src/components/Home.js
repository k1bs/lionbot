import React from 'react'
import { Link } from 'react-router-dom'

// created basic landing page
const Home = () => {
  return (
    <div className='home'>
      <div className='home'>
        <h1>Introducing, the King of all <span className='home_heading'>bots</span>.</h1>
        <div className='chatBoxContainer'>
          <div className='chatBox'>
            <p>LionBot is a new way to improve your stream</p>
          </div>
          <div className='chatBox2'>
            <p>With custom automated responses, you can focus on the game and let LionBot handle the chat.</p>
          </div>
        </div>
        <div id='lionbot_logo' />

        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Home
