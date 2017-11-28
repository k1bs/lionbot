import React from 'react'
import { Link } from 'react-router-dom'

// created basic landing page
const Home = () => {
  return (
      <div className='home'>
        <h1>Introducing, the King of all <span className='home_heading'>bots</span>.</h1>

        <div className='chatBox_logo_div'>
          <p className='chatBox'><h3>LionBot is a new way to improve your stream</h3></p>
          <p className='chatBox'><h3>With automated responses, you focus on gaming while LionBot handles the chat.</h3></p>
        </div>

        <div id='lionbot_logo'></div>

        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
        </ul>

      </div>
  )
}

export default Home
