import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
   
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export  const  InfoTab=()=> {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="SSO Domain" {...a11yProps()} />
          <Tab label="Procedure" {...a11yProps(1)} />
          <Tab label="HELP" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        Select the Single SSO Domain option to specify one domain name for all single sign-on hosts. For example, if you administer a system named test4 that is registered as part of the example.com network domain, its fully qualified host name is test4.example.com. If SSO is enabled for the example.com domain, only cookies that originate in this domain are authenticated and can be stored on the test4.example.com system. To set your SSO domain name, complete the following steps:Procedure Log in to the WebSphere Application Server Integrated Solutions Console on the Deployment Manager. Select Security > Global security > Web and SIP security > Single sign-on (SSO). Enter a value for the SSO Domain name. Click Apply and then click Save. Perform a full synchronization of all the nodes. What to do next Ensure that you have enabled Use available authentication data when an unprotected URI is accessed. For more information, see the Setting up federated repositories topic.
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
       <p> 1. Log in to the WebSphere Application Server Integrated Solutions Console on the Deployment Manager.</p>
       <p> 2. Select Security > Global security > Web and SIP security > Single sign-on (SSO).</p>
        <p>3. Enter a value for the SSO Domain name.</p>
       <p> 4. Click Apply and then click Save.</p>
       <p> 5. Perform a full synchronization of all the nodes.</p>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            <p>
          <a href="https://google.com">Configuring single sign-on</a>
          </p>
          <p>
          <a href="https://google.com">Enabling single sign-on for Tivoli Access Manager</a>
          </p>
          <p>
          <a href="https://google.com">Administering Communities</a>
          </p>
         
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}