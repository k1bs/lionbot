import React from 'react'

// updating and deleting individual commands component
const Command = (props) => {
  console.log(props)
  return (
    <div className='command'>
      <div className='words-module'>
        <h3>{props.command.keyword}</h3>
        <h4>{props.command.response}</h4>
      </div>
      {/* a user must be logged in, in order to edit or delete commands && a user cannont delete 'standard' commands  */}
      {(props.auth && !props.command.standard)
        ? <div className='button-module'>
          <span className='edit' onClick={() => props.setEditing(props.command.id)}>Edit</span>
          <span className='delete-span' onClick={() => props.deleteCommand(props.command.id)}>Delete</span>
          <button className={'toggle ' + (props.command.enabled ? 'enabled' : '')} onClick={() => {
            console.log(`Works!`)
            props.enableToggle(props.command.id)
          }}>Enbaled ?</button>
        </div>
        : ''}
    </div>
  )
}

export default Command
