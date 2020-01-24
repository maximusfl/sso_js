import React from 'react'
import AppUsersTable from './AppUsersTable'





export function AppUsers(props) {
  console.log(222)
    console.log(props)
    console.log(333)
  return (
      

    <div> 
            
     <AppUsersTable {...props}/>
    </div>
  )
}
