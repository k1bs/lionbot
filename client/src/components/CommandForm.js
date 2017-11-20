import React, { Component } from 'react'

class CommandForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      keyword: props.command ? props.command.keyword : '',
      response: props.command ? props.command.response : '',
      enabled: props.command ? props.command.enabled : ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <form onSubmit={(
        this.props.isAdd
        ? (e) => this.props.handleFormSubmit('POST', e, this.state)
        : (e) => this.props.handleFormSubmit('PUT', e, this.state, this.props.command.id)
      )}>
        <input type='text' name='keyword' placeholder='keyword' value={this.state.keyword} onChange={this.handleChange} />
        <input type='text' name='response' placeholder='response' value={this.state.response} onChange={this.handleChange} />
        <input type='submit' value='Edit it' />
      </form>
    )
  }
}

export default CommandForm
