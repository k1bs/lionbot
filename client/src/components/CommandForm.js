import React, { Component } from 'react'

// setting up CommandForm Component - a form for users to create their own bot commands
class CommandForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      keyword: props.command ? props.command.keyword : '',
      response: props.command ? props.command.response : '',
      enabled: props.command ? props.command.enabled : '',
      show: true
    }
    // binding handleChange and handleSubmit to the component
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

// ********************** idk ********************
  handleClick () {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }

//   displayForm (props) {
//     if (this.state.showButton === true) {
//       return (
//          <button className='showButton'>+</button>
//         this.setState = {
//           showButton: false
//       )
//       // render plus sign button and change showButton state to false
//     } else if (this.state.showButton === false) {
//       return (
//         <form onSubmit={(
//               this.props.isAdd
//               ? (e) => this.handleSubmit('POST', e, this.state)
//               : (e) => this.handleSubmit('PUT', e, this.state, this.props.command.id)
//             )}>
//           <input type='text' name='keyword' placeholder='Command' value={this.state.keyword} onChange={this.handleChange} />
//           <input type='text' name='response' placeholder='Response' value={this.state.response} onChange={this.handleChange} />
//           <input type='submit' value='Submit' />
//         </form>
//         this.setState = {
//           showButton: true
//       )
//       // show form and change showButton state to true
//     }
//   }
// }}
  // **********************************************

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
      <div className='form'>
        <div className='command form'>
          <button className='showButton' onClick={this.handleClick}> {this.state.isToggleOn ? 'ON' : 'OFF'} </button>
          <div className={this.props.shouldHide ? 'hidden' : ''} >
            <form onSubmit={(
              this.props.isAdd
              ? (e) => this.handleSubmit('POST', e, this.state)
              : (e) => this.handleSubmit('PUT', e, this.state, this.props.command.id)
            )}>
              <input type='text' name='keyword' placeholder='Command' value={this.state.keyword} onChange={this.handleChange} />
              <input type='text' name='response' placeholder='Response' value={this.state.response} onChange={this.handleChange} />
              <input type='submit' value='Submit' />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CommandForm
