import React from 'react'

const Command = (props) => {
  console.log(props)
  return (
    <div className='command'>
      <h3>{props.command.keyword}</h3>
      <h4>{props.command.response}</h4>
      <p>{props.command.enabled}</p>
      {props.auth
        ? <span className='edit' onClick={() => props.setEditing(props.command.id)}>Edit</span>
        : ''}
    </div>
  )
}

export default Command
