import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import CommandList from './components/CommandList'
import Register from './components/Register'
import Account from './components/Account'
import Login from './components/Login'

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
    this.logout = this.logout.bind(this)
  }

  componentDidMount () {
    fetch('/api/auth/verify', {
      credentials: 'include'
    }).then(res => res.json())
      .then(res => {
        this.setState({
          auth: res.auth,
          user: res.data.user
        })
      }).catch(err => console.log(err))
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

  logout () {
    fetch('/api/auth/logout', {
      credentials: 'include'
    }).then(res => res.json())
      .then(res => {
        this.setState({
          auth: res.auth
        })
      }).catch(err => console.log(err))
  }

  handleRegisterSubmit (e, data) {
    e.preventDefault()
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
            <Route exact path='/register' render={() => (
              this.state.auth
                ? <Redirect to='/account' />
                : <Register handleRegisterSubmit={this.handleRegisterSubmit} />
              )} />
            <Route exact path='/account' render={() => (
              !this.state.auth
                ? <Redirect to='/login' />
                : <Account user={this.state.user} />
              )} />
            <Route exact path='/login' render={() => (
                this.state.auth
                  ? <Redirect to='/account' />
                  : <Login handleLoginSubmit={this.handleLoginSubmit} />
              )} />
            <Route exact path='/' component={Home} />
            <Route exact path='/CommandList' render={() => <CommandList auth={this.state.auth} />} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
