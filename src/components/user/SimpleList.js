import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: 100
  }
}));

export default function SimpleList(props) {
  const classes = useStyles();

  const [applications, setApplications] = useState([]);
  useEffect(() => {
    fetch(
      "http://localhost:8080/api_v1/application/" +
        props.location.state.applicationId +
        "/user/" +
        props.location.state.userId +
        "/role"
    )
      .then(response => response.json())
      .then(data => setApplications(data))
    
  }, []);

  applications.map(app => console.log(app.roleName));

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {applications.map(role => (
          <ListItem button key={role.id}>
            <ListItemIcon>{role.roleName}</ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
