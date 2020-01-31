import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

export default function SelectList(props) {
  const classes = useStyles()
  const [role, setRole] = React.useState('default')
  const [open, setOpen] = React.useState(false)
  const [roles, setRoles] = useState([])
  useEffect(() => {
    fetch(
      'http://localhost:8080/api_v1/application/' +
        props.location.state.applicationId +
        '/role'
    )
      .then(response => response.json())
      .then(data => setRoles(data))
      .then(data => console.log(data))
  }, [])

  const handleChange = event => {
    setRole(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }
  console.log(props)

 

  return (
    <div>
      
        <FormControl className={classes.formControl}>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={role}
            onChange={handleChange}
            
          >
              {roles.map(row => (
            <MenuItem key={row.id} value={row.id}>{row.roleName}
             
            </MenuItem>
            ))}
          </Select>
        </FormControl>
   
    </div>
  )
}
