import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'

import DialogTitle from '@material-ui/core/DialogTitle'

export default function RoleFormDialog(props) { 
  const [roleName, setRoleName] = useState('')
  const [description, setDescription] = useState('')

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
      console.log(props)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const SaveHandleButtonClick = () => {
    const data = {
      roleName: roleName,
      roleDescription: description
      
    }
    fetch('http://localhost:8080/api_v1/application/'+props.location.state.applicationId +'/role', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        mode: 'no-cors'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(result => console.log('result', result))
      .catch(error => console.log('error', error))
    handleClose()
    window.location.reload()
  }

  return (
    <div>
      <p>
        <Button
          variant="contained"
          className="customButton"
          size="medium"
          color="primary"
          onClick={handleClickOpen}
        >
          add
        </Button>
      </p>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">new {props.location.state.applicationName}'s role</DialogTitle>
        <DialogContent>
         


          <TextField
            onChange={evt => setRoleName(evt.target.value)}
            margin="dense"
            id="name"
            label="role's name"
            type="text"
            fullWidth
            autoComplete="off"
            autoFocus
          />

          <TextField
            onChange={evt => setDescription(evt.target.value)}
            margin="dense"
            id="description"
            label="description"
            type="text"
            fullWidth
            autoComplete="off"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          <Button onClick={SaveHandleButtonClick} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
