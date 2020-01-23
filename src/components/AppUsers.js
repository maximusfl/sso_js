import React from 'react'
import AppUsersTable from './AppUsersTable'





export function AppUsers(props) {
  
    console.log(props)
  return (
      

    <div> 
            
     <AppUsersTable {...props}/>
    </div>
  )
}
