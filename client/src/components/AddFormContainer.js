import React, { Component } from 'react'
import CommandForm from './CommandForm'

class AddFormContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formVisible: false
    }
    this.toggleVisible = this.toggleVisible.bind(this)
  }

  toggleVisible () {
    this.setState({
      formVisible: !this.state.formVisible
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.toggleVisible} className='add-button'><i className='fa fa-lg fa-fw fa-plus' aria-hidden='true' /></button>
        {this.state.formVisible
          ? <CommandForm isAdd handleFormSubmit={this.props.handleFormSubmit} />
          : ''}
      </div>
    )
  }
}

export default AddFormContainer
