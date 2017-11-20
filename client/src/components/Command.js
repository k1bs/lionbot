import React from 'react'

const Command = (props) => {
  console.log(props)
  return (
    <div className='command'>
      <h3>{props.command.keyword}</h3>
      <h4>{props.command.response}</h4>
      <p>{props.command.enabled}</p>
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
