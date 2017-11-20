import React, { Component } from 'react'

class CommandList extends Component {
  constructor () {
    super()
    this.state = {
      commands: null,
      dataLoaded: false
    }
  }

  componentDidMount () {
    fetch('/api/commamnds') // (/api/commands', { credentials: 'include'})
      .then(res => res.json())
      .then(res => {
        this.setState({
          commands: res.data.commands,
          dataLoaded: true
        })
      }).catch(err => console.log(err))
  }

  renderCommandList () {
    if (this.state.dataLoaded) {
      return <h1>Our command list will go here</h1>
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
