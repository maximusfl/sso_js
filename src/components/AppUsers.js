import React from 'react'
import AppUsersList from './AppUsersList'

export function AppUsers(props) {
  return (
    <div>
      <h1>Users in {props.location.state.applicationName}</h1>
      <AppUsersList {...props} />
    </div>
  )
}
