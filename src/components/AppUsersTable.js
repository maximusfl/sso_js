import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";

const columns = [
  { id: "name", label: "Name", minWidth: 80 },
  { id: "login", label: "Login", minWidth: 1 },
  { id: "password", label: "Password", minWidth: 80 },

  {
    id: "email",
    label: "Email",
    minWidth: 80,
    align: "right",
    format: value => value.toLocaleString()
  }
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});

export default function AppUsersTable(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(
      "http://localhost:8080/api_v1/application/" +
        props.location.state.applicationId +
        "/user"
    )
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log("error: " + error));
  }, []);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={user.id}>
                  {columns.map(column => {
                    const value = user[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <Link
                          to={{
                            pathname: `/application/${props.location.state.applicationId}/user/${user.id}`,
                            state: {
                              applicationId: props.location.state.applicationId,
                              applicationUrl:
                                props.location.state.applicationUrl,
                              applicationName:
                                props.location.state.applicationName,
                              userId: user.id,
                              name: user.name,
                              login: user.login,
                              password: user.password,
                              email: user.email
                            }
                          }}
                        >
                          {value}
                        </Link>
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
