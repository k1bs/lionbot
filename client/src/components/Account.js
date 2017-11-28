import React from 'react'

const Account = (props) => {
  console.log(props.user)
  return (
    <div className='command account-container formatted'>
      <h3>{props.user.username}</h3>
      <h6>{props.user.email}</h6>
    </div>
  )
}

export default Account
