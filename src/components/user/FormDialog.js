import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import AddIcon from '@material-ui/icons/Add'
import SelectList from './SelectList'

export default function FormDialog(props) {
  const [open, setOpen] = useState(false)
  const [myRole, setMyRole] = useState('')
  useEffect(() => {
    console.log(myRole)
  })
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const updateRoles = () => {
    fetch(
      'http://localhost:8080/api_v1/application/' +
        props.location.state.applicationId +
        '/user/' +
        props.location.state.userId +
        '/role',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          mode: 'cors',
        },
        credentials: 'include',
        method: 'PUT',
        body: myRole,
      }
    )
      .then(result => console.log('result', result))
      .catch(error => console.log('error', error))
    handleClose()
    window.location.reload()
  }

  return (
    <div>
      <AddIcon onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add role</DialogTitle>
        <DialogContent>
          <SelectList {...props} setMyRole={setMyRole} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={(handleClose, updateRoles)} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
