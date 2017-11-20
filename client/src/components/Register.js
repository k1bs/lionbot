import React, { Component } from 'react'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state)}>
          <input type='text' name='username' value={this.state.username} placeholder='Username' onChange={this.handleInputChange} />
          <input type='password' name='password' value={this.state.password} placeholder='Email' onChange={this.handleInputChange} />
          <input type='email' name='email' value={this.state.email} placeholder='larry@example.com' onChange={this.handleInputChange} />
          <input type='submit' value='Register' />
        </form>
      </div>
    )
  }
}

export default Register
