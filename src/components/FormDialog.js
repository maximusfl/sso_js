import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

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
      applicationName: applicationName,
      description: description,
      applicationUrl: applicationUrl,
    }
    fetch('http://localhost:8080/api_v1/application', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(data),
    })
    // .then(result => console.log('result', result))
    // .catch(error => console.log('error', error))
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
        <DialogTitle id="form-dialog-title">New Application</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add new App just write url, name and description
          </DialogContentText>

          <TextField
            onChange={evt => setApplicationUrl(evt.target.value)}
            margin="dense"
            id="url"
            label="url"
            type="url"
            fullWidth
            autoComplete="off"
            autoFocus
          />

          <TextField
            onChange={evt => setApplicationName(evt.target.value)}
            margin="dense"
            id="name"
            label="name"
            type="text"
            fullWidth
            autoComplete="off"
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
