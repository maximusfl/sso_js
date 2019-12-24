import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const options = ['Edit', 'Delete']

const ITEM_HEIGHT = 48


export default function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  let buttonValue
  

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const deleteRole = () => {
    fetch('http://localhost:8080/api_v1/application'+
    props.location.state.applicationId +
    '/role', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      method: 'DELETE',
      body: JSON.stringify({id: props.items.id}),
    })
    .then(result => console.log('result', result))
    .catch(error => console.log('error', error))
    
      
       
   
  }
  

  const editRole = ()=>{
    console.log( props.items.id);
    
  }
 


 

  const handleClose = event => {
    setAnchorEl(null)
    
    
      

    try {
      buttonValue = event.currentTarget.getElementsByClassName('ItemButtom')[0]
        .textContent
    } catch (err) {
      console.error()
    }
    if(buttonValue===' Edit '){editRole()}
    if(buttonValue===' Delete '){deleteRole()}
  

    
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
        {options.map(option => (
          <MenuItem key={option} onClick={handleClose}>
            <div className="ItemButtom"> {option} </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
   
  )
}
