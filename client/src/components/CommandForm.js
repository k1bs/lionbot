import React, { Component } from 'react'

class CommandForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      keyword: props.commands ? props.commands.keyword : '',
      response: props.commands ? props.commands.response : '',
      enabled: props.commands ? props.commands.enabled : ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    const name = e.target.className
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
        : (e) => this.props.handleFormSubmit('PUT', e, this.state, this.props.commands.id)
      )}>
        <input type='text' name='keyword' placeholder='keyword' value={this.state.keyword} onChange={this.handleChange} />
        <input type='text' name='respoonse' placeholder='response' value={this.state.response} onChange={this.handleChange} />
      </form>
    )
  }
}

export default CommandForm
