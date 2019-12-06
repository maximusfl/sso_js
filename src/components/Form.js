import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  button: {
    margin: theme.spacing(1),
  },
}));



export  const Form = () => {

  const[applicationUrl,setApplicationUrl]=useState('');
  const[applicationName,setApplicationName]=useState('');
  const[description, setDescription]=useState('');

  const classes = useStyles();

  const handleButtonClick = ()=> {
    const data = {
      appUrl: applicationUrl
    }
    fetch('http://localhost:8080/sso_app/newapp',
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        method: "POST",
        body: JSON.stringify(data)
    }).then((result)=>console.log('result', result)).catch((error)=>console.log('error',error))
  }

  return (
    <div>
    <div className={classes.container}>
      <div >
        
      <TextField
      onChange={(evt)=>setApplicationName(evt.target.value)}
          label="application name"
          id="margin-dense"
          className={classes.textField}
          autoComplete='off'
          
          margin="normal"
          
        />
        <TextField
        onChange={(evt)=>setApplicationUrl(evt.target.value)}
          label="application url"
          id="margin-dense"
          className={classes.textField}
          autoComplete='off'
          margin="normal"
        />
         
        
        <TextField
        onChange={(evt)=>setDescription(evt.target.value)}
          id="standard-full-width"
          style={{ margin: 8}}
          label="description"
          
          multiline
          
          fullWidth
          autoComplete='off'
          margin="normal"
          
        />


       
      
        
      </div>
    </div>
    <div>
    
    </div>
    <div>
    <Button 
    onClick={handleButtonClick}
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      startIcon={<SaveIcon />}
    >
      Save
    </Button>
    </div>
    </div>
  );
}