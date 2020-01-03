import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

export default function EditRoleDialog(props) {
  const [myRoleName=props.role.roleName, setMyRoleName] = useState(props.role.roleName);
  const [description=props.role.roleDescription, setDescription] = useState(props.role.roleDescription);

  console.log(myRoleName);
  console.log(description);


  
  

  const SaveHandleButtonClick = () => {
    
    const data = {
      id: props.role.id,
      roleName: myRoleName,
      roleDescription: description,
      application: {
        id: props.role.application.id
      }
    };
    fetch( "http://localhost:8080/api_v1/application/" +
    props.role.application.id +
    "/role", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "cors"
      },
      credentials: "include",
      method: "PUT",
      body: JSON.stringify(data)
    })
      .then(result => console.log("result", result))
      .catch(error => console.log("error", error));
    handleClose();
    window.location.reload()
  };

  const handleClose = () => {
    props.handleModalClose();
  };

  return (
    <div>
      <Dialog
        open={props.isOpened}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit role</DialogTitle>
        <DialogContent>
          <TextField
            defaultValue={props.role.roleName}
            onChange={e => setMyRoleName(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="role's name"
            type="text"
            fullWidth
          />
          <TextField
            defaultValue={props.role.roleDescription}
            onChange={e => setDescription(e.target.value)}
            margin="dense"
            id="description"
            label="description"
            type="text"
            fullWidth
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
  );
}
