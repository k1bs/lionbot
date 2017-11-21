import React, { Component } from 'react'

class Register extends Component {
  constructor (props) {
    super(props)
    // initialize state as empty strings
    this.state = {
      username: '',
      password: '',
      email: ''
    }
    // bind handleInputChange to this class
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  // as the input values change, they are set in state
  handleInputChange (e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  // When the form submits, the state above if is passed as arguments to handleRegisterSubmit (which was passed as props)
  render () {
    return (
      <div>
        <form onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state)}>
          <input type='text' name='username' value={this.state.username} placeholder='Username' onChange={this.handleInputChange} />
          <input type='password' name='password' value={this.state.password} placeholder='Password' onChange={this.handleInputChange} />
          <input type='email' name='email' value={this.state.email} placeholder='larry@example.com' onChange={this.handleInputChange} />
          <input type='submit' value='Register' />
        </form>
      </div>
    )
  }
}

export default Register
