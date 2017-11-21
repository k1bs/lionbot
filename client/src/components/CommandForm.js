import React, { Component } from 'react'

// setting up CommandForm Component - a form for users to create their own bot commands
class CommandForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      keyword: props.command ? props.command.keyword : '',
      response: props.command ? props.command.response : '',
      enabled: props.command ? props.command.enabled : ''
    }
    // binding handleChange and handleSubmit to the component
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

// calling a sythetic event when the form changes specifically targeting the name and value fields
  handleChange (e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

// once a user clicks submit on a new command, the field will clear
  handleSubmit (method, e, data, id) {
    e.preventDefault()
    this.setState({
      keyword: '',
      response: '',
      enabled: ''
    })
    this.props.handleFormSubmit(method, data, id)
  }

// depending on whether a user is editing a command or creating a command this will render a put or post request
  render () {
    return (
      <div className='command form'>
        <form onSubmit={(
          this.props.isAdd
          ? (e) => this.handleSubmit('POST', e, this.state)
          : (e) => this.handleSubmit('PUT', e, this.state, this.props.command.id)
        )}>
          <input type='text' name='keyword' placeholder='keyword' value={this.state.keyword} onChange={this.handleChange} />
          <input type='text' name='response' placeholder='response' value={this.state.response} onChange={this.handleChange} />
          <input type='submit' value='Edit it' />
        </form>
      </div>
    )
  }
}

export default CommandForm
