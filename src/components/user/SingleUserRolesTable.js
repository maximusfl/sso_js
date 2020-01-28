import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelTableRoles from './ExpansionPanelTableRoles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function SingleUserRolesTable(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log("props from single user roles tadble");
  console.log(props)

  const [applications, setApplications] = useState([])
  useEffect(() => {
    fetch(
      'http://localhost:8080/api_v1/application/' +
        props.location.state.applicationId +
        '/user/' +
        props.location.state.userId +
        '/role'
    )
      .then(response => response.json())
      .then(data => setApplications(data))
      .then(data => console.log(data))
  }, [])
  console.log(applications)

  

  return (
    <div className={classes.root}>



{/* 
            <TableRow hover key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              
            </TableRow> */}
         




{applications.map(row => (    
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')} key={row.name}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>General settings</Typography>
          <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ExpansionPanelTableRoles   apps={applications}/>
          </Typography>
        </ExpansionPanelDetails >
      </ExpansionPanel>
      ))}
    </div>
  );
}