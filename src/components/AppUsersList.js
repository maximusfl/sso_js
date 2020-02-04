import React, { useState, useEffect } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { NavLink } from 'react-router-dom'
import DeleteUserdialog from './user/DeleteUserDialog'
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow)

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
})

export default function AppUsersList(props) {
  const classes = useStyles()
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(
      'http://localhost:8080/api_v1/application/' +
        props.location.state.applicationId +
        '/user'
    )
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log('error: ' + error))
  }, [])

  return (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell>Login</StyledTableCell>
              <StyledTableCell align="left">Password</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  <NavLink
                    className="nav-link"
                    to={{
                      pathname: `/application/${props.location.state.applicationId}/user/${user.id}`,
                      state: {
                        applicationId: props.location.state.applicationId,
                        applicationUrl: props.location.state.applicationUrl,
                        applicationName: props.location.state.applicationName,
                        userId: user.id,
                        name: user.name,
                        login: user.login,
                        password: user.password,
                        email: user.email,
                      },
                    }}
                    exact
                  >
                    {user.name}
                  </NavLink>
                </StyledTableCell>
                <StyledTableCell>{user.login}</StyledTableCell>
                <StyledTableCell align="left">{user.password}</StyledTableCell>
                <StyledTableCell align="left">{user.email}</StyledTableCell>
                <StyledTableCell align="left">
                  <DeleteUserdialog
                    {...{
                      applicationId: props.location.state.applicationId,
                      applicationUrl: props.location.state.applicationUrl,
                      applicationName: props.location.state.applicationName,
                      userId: user.id,
                      name: user.name,
                      login: user.login,
                      password: user.password,
                      email: user.email,
                    }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}
