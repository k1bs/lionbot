import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

const fetch = window.fetch

class App extends Component {
  constructor () {
    super()
    this.state = {
      auth: false,
      user: null
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
  }

  handleLoginSubmit (e, data) {
    e.preventDefault()
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          auth: res.auth,
          user: res.data.user
        })
      }).catch(err => console.log(err))
  }

  handleRegisterSubmit (e, data) {
    fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          auth: res.auth,
          user: res.data.user
        })
      }).catch(err => console.log(err))
  }

  render () {
    return (
      <Router>
        <div className='App'>
          <Header />
          <div className='container'>
            <Route exact path='/' component={Home} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
