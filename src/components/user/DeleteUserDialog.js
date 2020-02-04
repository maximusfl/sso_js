import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'

import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

export default function DeleteuserDialog(props) {
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()
  console.log(props)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteHandleClick = () => {
    fetch(
      'http://localhost:8080/api_v1/application/' +
        props.applicationId +
        '/user/' +
        props.userId,
      {
        headers: {
          Accept: 'application/json',

          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        method: 'DELETE',
      }
    )
      .then(result => console.log('result', result))
      .catch(error => console.log('error', error))
    handleClose()
    window.location.reload()
  }

  return (
    <div>
      <IconButton aria-label="delete" className={classes.margin}>
        <DeleteIcon fontSize="small" onClick={handleClickOpen} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Delete ' + props.name + ' from ' + props.applicationName + ' ?'}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          <Button
            onClick={deleteHandleClick}
            color="primary"
            autoFocus
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
