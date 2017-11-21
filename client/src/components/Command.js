import React from 'react'

// updating and deleting individual commands component
const Command = (props) => {
  console.log(props)
  return (
    <div className='command'>
      <h3>{props.command.keyword}</h3>
      <h4>{props.command.response}</h4>
      <p>{props.command.enabled}</p>
      {/* a user must be logged in, in order to edit or delete commands && a user cannont delete 'standard' commands  */}
      {(props.auth && !props.command.standard)
        ? <div>
          <span className='edit' onClick={() => props.setEditing(props.command.id)}>Edit</span>
          <span className='delete-span' onClick={() => props.deleteCommand(props.command.id)}>Delete</span>
        </div>
        : ''}
    </div>
  )
}

export default Command
