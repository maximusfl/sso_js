import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";

import DeleteIcon from "@material-ui/icons/Delete";

import Fab from "@material-ui/core/Fab";
import FormDialog from "./FormDialog";

const useStyles = makeStyles({
  table: {
    minWidth: 700
  },
  header: {
    backgroundColor: "Silver"
  }
});

export default function SimpleTable(props) {
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
      .then(data => setApplications(data));
  }, []);

  const handleDelete =  id => {
    fetch(
      "http://localhost:8080/api_v1/application/" +
        props.location.state.applicationId +
        "/user/" +
        props.location.state.userId +
        "/role/" +
        id,
      {
        headers: {
          Accept: "application/json",

          "Content-Type": "application/json"
        },
        mode: "cors",
        credentials: "include",
        method: "DELETE"
      }
    )
      .then(result => console.log("result", result))
      .catch(error => console.log("error", error));

    window.location.reload();
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">
              <Fab color="primary" aria-label="add" size="small">
                <FormDialog {...props} />
              </Fab>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {applications.map(row => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.roleName}</TableCell>
              <TableCell align="right">{row.roleDescription}</TableCell>
              <TableCell align="right">
                <DeleteIcon onClick={() => handleDelete(row.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
