import React, { useState, useEffect } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { NavLink } from 'react-router-dom'
import FormDialog from './FormDialog'

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

export function NewAllApps() {
  const classes = useStyles()
  const [apps, setApps] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/sso_app/showapp')
      .then(response => response.json())
      .then(data => setApps(data))
  }, [])

  return (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Application</StyledTableCell>
              <StyledTableCell>URL</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apps.map(app => (
              <StyledTableRow key={app.id}>
                <StyledTableCell component="th" scope="row">
                  <NavLink
                    className="nav-link"
                    to={{
                      pathname: `/app/${app.appUrl}`,
                      state: {
                        applicationUrl: app.appUrl,
                      },
                    }}
                    exact
                  >
                    {app.appName}
                  </NavLink>
                </StyledTableCell>
                <StyledTableCell>{app.appUrl}</StyledTableCell>
                <StyledTableCell align="left">
                  {app.description}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <FormDialog />
    </div>
  )
}
