import React, { Component } from 'react'
import Command from './Command'
import CommandForm from './CommandForm'

// called fetch becasue atom uses window.fetch
const fetch = window.fetch

// setting up CommandList Component
class CommandList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      commands: [],
      dataLoaded: false,
      auth: props.auth,
      currentlyEditing: null
    }
    // binding functions to the component
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.setEditing = this.setEditing.bind(this)
    this.getAllCommands = this.getAllCommands.bind(this)
    this.deleteCommand = this.deleteCommand.bind(this)
  }

// when the component mounts, we're pulling commands from the backend and set the data in state.
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

// created a handleFormSubmit method
  handleFormSubmit (method, data, id) {
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

// when the delete button is clicked, it will make a delete request to /api/commands/${id}
  deleteCommand (id) {
    fetch(`/api/commands/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        this.getAllCommands()
      }).catch(err => console.log(err))
  }

// if the commands exist, we're rendering them, if not we'll render a "Loading..." message
  renderCommandList () {
    console.log(this.state)
    if (this.state.dataLoaded) {
      return this.state.commands.map(command => {
        if (command.id === this.state.currentlyEditing) {
          return <CommandForm command={command} handleFormSubmit={this.handleFormSubmit} isAdd={false} key={command.id} />
        } else return <Command key={command.id} command={command} auth={this.state.auth} deleteCommand={this.deleteCommand} setEditing={this.setEditing} />
      })
    } else return <p>Loading...</p>
  }

// if this.state.auth is true, render the form passing in the handleFormSubmit method
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
