import React, { Component } from 'react'
import Command from './Command'
import CommandForm from './CommandForm'

const fetch = window.fetch

class CommandList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      commands: [],
      dataLoaded: false,
      auth: props.auth,
      currentlyEditing: null
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.setEditing = this.setEditing.bind(this)
    this.getAllCommands = this.getAllCommands.bind(this)
  }

  componentDidMount () {
    this.getAllCommands()
  }

  getAllCommands () {
    fetch('/api/commands', {credentials: 'include'})
    .then(res => res.json())
    .then(res => {
      console.log(res.data)
      this.setState({
        commands: res.data,
        dataLoaded: true
      })
    }).catch(err => console.log(err))
  }

  setEditing (id) {
    this.setState({
      currentlyEditing: id
    })
  }

  handleFormSubmit (method, e, data, id) {
    e.preventDefault()
    fetch(`/api/commands/${id || ''}`, {
      method: method,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        currentlyEditing: null
      })
      this.getAllCommands()
    }).catch(err => console.log(err))
  }

  renderCommandList () {
    console.log(this.state)
    if (this.state.dataLoaded) {
      return this.state.commands.map(command => {
        if (command.id === this.state.currentlyEditing) {
          return <CommandForm command={command} handleFormSubmit={this.handleFormSubmit} isAdd={false} key={command.id} />
        } else return <Command key={command.id} command={command} auth={this.state.auth} setEditing={this.setEditing} />
      })
    } else return <p>Loading...</p>
  }

  render () {
    return (
      <div className='commandlist'>
        {this.state.auth
         ? <CommandForm isAdd handleFormSubmit={this.handleFormSubmit} />
         : ''}
        {this.renderCommandList()}
      </div>
    )
  }
}

export default CommandList
