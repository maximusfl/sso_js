import React from 'react'
import SingleUserTable from './SingleUserTable'
import SingleUserRolesTable from './SingleUserRolesTable'



export default function SingleUser(props){
    
    console.log(props)

return(
    <div>
      
<SingleUserTable {...props}/>



<SingleUserRolesTable {...props}/>

    </div>
)




}
