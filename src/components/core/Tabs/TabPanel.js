import React from 'react';
import { Typography } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      variant="inherit"
      hidden={value !== index}
      {...other}
    >
      {value === index && children}
    </Typography>
  );
}

export default TabPanel;
