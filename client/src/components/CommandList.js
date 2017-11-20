import React, { Component } from 'react'
import Command from './Command'

const fetch = window.fetch

class CommandList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      commands: null,
      dataLoaded: false
    }
  }

  componentDidMount () {
    this.getAllCommands()
    // fetch('/api/commamnds') // (/api/commands', { credentials: 'include'})
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       commands: res.data.commands,
    //       dataLoaded: true
    //     })
    //   }).catch(err => console.log(err))
  }

  getAllCommands () {
    fetch('/api/commamnds', {credentials: 'include'})
    .then(res => res.json())
    .then(res => {
      this.setState({
        commands: res.data.commands,
        dataLoaded: true
      })
    }).catch(err => console.log(err))
  }

  handleFormSubmit (method, e, data, id) {
    e.preventDefault()
    fetch(`/api/commamnds/${id || ''}`, {
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
      this.getAllCommands()
    }).catch(err => console.log(err))
  }

  renderCommandList () {
    if (this.state.dataLoaded) {
      return this.state.commands.map(command => {
        return <Command key={command.id} command={command} /> // command or commands???
      })
    } else return <p>Loading...</p>
  }

  render () {
    return (
      <div className='commandlist'>
        {this.renderCommandList()}
      </div>
    )
  }
}

export default CommandList
