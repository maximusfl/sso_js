import React from 'react'
import { Roles } from '../components/Roles'
import RoleFormDialog from '../components/RoleFormDialog'

export const SingleAppPage = (props,role) => {
  console.log(props)

  return (
    <div>
      <h1>{props.location.state.applicationName}</h1>
      <Roles {...props}/>
      <RoleFormDialog {...props}/>
    </div>
  )
}
