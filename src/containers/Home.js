import React, { Fragment } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import { getVersion } from '../utils/common'
import { Grid } from '@material-ui/core';
import HomeLink from '../components/HomeLink'

function Home() {
  return (
    <Fragment>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <HomeLink to="/user-profile" title="我是誰" icon={null} />
        </Grid>
        <Grid item xs={6}>
          <HomeLink to="/about" title="關於" icon={null} />
        </Grid>
      </Grid>
      {getVersion()}
    </Fragment>
  );
}

export default Home;
