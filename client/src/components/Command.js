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
          <div className='icon-module'>
            <span className='edit' onClick={() => props.setEditing(props.command.id)}><i className='fa fa-pencil fa-fw fa-lg cursor' /></span>
            <span className='delete-span' onClick={() => props.deleteCommand(props.command.id)}><i className='fa fa-trash fa-fw fa-lg cursor' /></span>
          </div>
          <label className='switch'>
            <button className={'enabled-button ' + (props.command.enabled ? 'enabled' : '')} onClick={() => {
              console.log(`Works!`)
              props.enableToggle(props.command.id)
            }} />
            <span className='slider' />
          </label>
        </div>
        : ''}
    </div>
  )
}

export default Command
