import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {NavLink} from 'react-router-dom'
import FormDialog from './FormDialog'


const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);
  
  function createData(name, url, description) {
    return { name, url, description};
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });
  
export  function NewAllApps() {
    const classes = useStyles();

    return (
      <div>

     
      
      <Paper className={classes.root}>

        


        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Application</StyledTableCell>
              
              <StyledTableCell >URL</StyledTableCell>
              <StyledTableCell align="left">Description

                         
              </StyledTableCell>
             
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">



                <NavLink className="nav-link"
            to={{
              pathname: `/app/${row.url}`,
              state: {
                applicationUrl: row.url
              }
            }}
            exact
            >
        {row.name}
        </NavLink>


                  





                </StyledTableCell>
                <StyledTableCell >{row.url}</StyledTableCell>
                <StyledTableCell align="left">{row.description}</StyledTableCell>
                
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

<FormDialog/>

      </div>
    );
   
  }
