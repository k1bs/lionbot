import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/commandlist'>Dashboard</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/account'>Account</Link></li>
          <li><Link to='/docs'>Docs</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
