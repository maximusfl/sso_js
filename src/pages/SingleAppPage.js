import React, { useState } from 'react'
import { Roles } from '../components/Roles'
import RoleFormDialog from '../components/RoleFormDialog'
import EditRoleDialog from '../components/EditRoleDialog'
import ContainedButtons from '../components/ContainedButtons'
import { Link } from 'react-router-dom'
export const SingleAppPage = props => {
  const [isEditModalOpened, setIsEditModalOpened] = useState(false)
  const [role, setRole] = useState([])
  console.log(props)
  console.log(111)

  return (
    <div>
      <h1>
        {props.location.state.applicationName}
        <Link
          to={{
            pathname: '/app-users',
            applicationId: props.location.state.applicationId,
          }}
        >
          <ContainedButtons />
        </Link>
      </h1>

      <Roles
        setRole={setRole}
        onEditButtonClick={() => setIsEditModalOpened(true)}
        {...props}
      />
      <RoleFormDialog {...props} />
      <EditRoleDialog
        role={role}
        isOpened={isEditModalOpened}
        handleModalClose={() => setIsEditModalOpened(false)}
      />
    </div>
  )
}
