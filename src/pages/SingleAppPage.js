import React, { useState, useEffect } from 'react'
import { Roles } from '../components/Roles'

export const SingleAppPage = props => {
  console.log(props)

  return (
    <div>
      <h1>{props.location.state.applicationName}</h1>
      <Roles {...props} />
    </div>
  )
}
