import React from 'react'

import { Link } from 'react-router-dom'

// created links to different pages, added a logout function on click.
class Header extends React.Component {
  showProperNav () {
    if (this.props.auth === true) {
      return (
        <ul>
          <li><Link to='/commandlist'>Dashboard</Link></li>
          <li><Link to='/account'>Account</Link></li>
          <li><Link to='/docs'>Docs</Link></li>
          <li><span className='logout' onClick={() => this.props.logout()}>Logout</span></li>
        </ul>
      )
    } else {
      return (
        <ul>
          <li><Link to='/commandlist'>Dashboard</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/account'>Account</Link></li>
          <li><Link to='/docs'>Docs</Link></li>
          <li><span className='logout' onClick={() => this.props.logout()}>Logout</span></li>
        </ul>
      )
    }
  }

  render () {
    return (
      <header>
        <div className='logo-div'>
          <h1>LionBot</h1>
        </div>
        <nav>
          {this.showProperNav()}
        </nav>
      </header>
    )
  }
}

export default Header
