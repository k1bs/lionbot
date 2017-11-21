import React, { Component } from 'react'

class Login extends Component {
  constructor (props) {
    super(props)
    // initialize the state as empty strings
    this.state = {
      username: '',
      password: ''
    }
    // bind input change to this class
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  // when input values change, set the state
  handleInputChange (e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  // when form is submitted, call handleLoginSubmit (which was passed as props) with state as an argument
  render () {
    return (
      <div>
        <form onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}>
          <input type='text' name='username' value={this.state.username} placeholder='Username' onChange={this.handleInputChange} />
          <input type='password' name='password' value={this.state.password} placeholder='Password' onChange={this.handleInputChange} />
          <input type='submit' value='Log In' />
        </form>
      </div>
    )
  }
}

export default Login
