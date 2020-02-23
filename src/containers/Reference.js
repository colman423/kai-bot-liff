import React, { Fragment } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import { getVersion } from '../utils/common'
import { Grid, Box } from '@material-ui/core';
import HomeLink from '../components/HomeLink'

function Reference() {
  return (
    <Fragment>
      <Box p={1}>
        <div>Icons made by <a href="https://www.flaticon.com/authors/inipagistudio" title="inipagistudio">inipagistudio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        
      </Box>
    </Fragment>
  );
}

export default Reference;
