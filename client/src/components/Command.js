import React from 'react'

const Command = (props) => {
  return (
    <div className='command'>
      <h3>{props.commands.keyword}</h3>
      <h4>{props.commands.response}</h4>
      <p>{props.commands.enabled}</p>
      {props.auth
        ? <span className = "edit" onClick={() => props.setEditing(props.commands.id)}>Edit</span>
        : ''}
    </div>
  )
}

export default Command
