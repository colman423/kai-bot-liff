import React, { Fragment } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import { getVersion } from '../utils/common'
import { Grid, Box } from '@material-ui/core';
import HomeLink from '../components/HomeLink'
import Icon from '../components/core/Icon';
import PersonOutlined from '@material-ui/icons/PersonOutlined'
import InfoOutlined from '@material-ui/icons/InfoOutlined'

function Home() {
  return (
    <Fragment>
      <Box p={1}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <HomeLink
              title="我是誰"
              to="/user-profile"
              icon={PersonOutlined}
            />
          </Grid>
          <Grid item xs={6}>
            <HomeLink
              title="關於"
              to="/about"
              icon={InfoOutlined}
            />
          </Grid>
        </Grid>
        <br />
        {getVersion()}
      </Box>
    </Fragment>
  );
}

export default Home;
