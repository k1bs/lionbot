import React from 'react'

import { Link } from 'react-router-dom'

// created links to different pages, added a logout function on click.
const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/commandlist'>Dashboard</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/account'>Account</Link></li>
          <li><Link to='/docs'>Docs</Link></li>
          <li><span className='logout' onClick={() => props.logout()}>Logout</span></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
