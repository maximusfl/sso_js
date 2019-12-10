import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

export default function FormDialog() {
  const [applicationUrl, setApplicationUrl] = useState('')
  const [applicationName, setApplicationName] = useState('')
  const [description, setDescription] = useState('')

  const [open, setOpen] = React.useState(false)

  

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const SaveHandleButtonClick = () => {
    const data = {
      
      appName: applicationName,
      description: description,
      appUrl: applicationUrl,
    }
    fetch('http://localhost:8080/sso_app/application', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
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
      <Fab
        size="small"
        color="secondary"
        aria-label="add"
        className="customAddIcon"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Application</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add new App just write url, name and description
          </DialogContentText>
          <TextField
            onChange={evt => setApplicationUrl(evt.target.value)}
            autoFocus
            margin="dense"
            id="url"
            label="url"
            type="url"
            fullWidth
            autoComplete="off"
            autofocus="true"
            
          />

          <TextField
            onChange={evt => setApplicationName(evt.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="text"
            fullWidth
            autoComplete="off"
            
          />

          <TextField
            onChange={evt => setDescription(evt.target.value)}
            autoFocus
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
