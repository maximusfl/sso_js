import React,{useState} from 'react'
import { Roles } from '../components/Roles'
import RoleFormDialog from '../components/RoleFormDialog'
import EditRoleDialog from '../components/EditRoleDialog'

export const SingleAppPage = (props) => {
  const [isEditModalOpened, setIsEditModalOpened] = useState(false)
  const [role, setRole] = useState([]);
  console.log(props)

  return (
    <div>
      <h1>{props.location.state.applicationName}</h1>
      <Roles setRole={setRole} onEditButtonClick={()=>setIsEditModalOpened(true)} {...props}/>
      <RoleFormDialog  {...props}/>
      <EditRoleDialog role={role} isOpened={isEditModalOpened} handleModalClose={()=>setIsEditModalOpened(false)}/>
    </div>
  )
}
