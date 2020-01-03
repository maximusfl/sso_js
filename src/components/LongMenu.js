import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const ITEM_HEIGHT = 48

export default function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  let buttonValue

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleDeleteButtonClick = event => {
    handleClick(event)
    deleteRole()
    window.location.reload()
  }

  const deleteRole = () => {
    fetch(
      'http://localhost:8080/api_v1/application/' +
        props.location.state.applicationId +
        '/role',
      {
        headers: {
          Accept: 'application/json',

          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        method: 'DELETE',
        body: JSON.stringify(props.role.id),
      }
    )
      .then(result => console.log('result', result))
      .catch(error => console.log('error', error))
  }

  const handleEditButtonClick = () => {
    props.setRole(props.role)

    props.onEditButtonClick()
    handleClose()
  }

  const editRole = () => {
    console.log(props.role.id)
  }

  const handleClose = event => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        <MenuItem onClick={handleEditButtonClick}>
          <div> edit </div>
        </MenuItem>

        <MenuItem onClick={handleDeleteButtonClick}>
          <div> delete</div>
        </MenuItem>
      </Menu>
    </div>
  )
}
