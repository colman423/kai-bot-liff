import React, { Fragment, useEffect } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import { getVersion } from '../utils/common'
import { Grid } from '@material-ui/core';
import HomeLink from '../components/HomeLink'

function About() {
  console.log("About func")
  useEffect(() => {
    console.log("About init")
  }, [])
  return (
    <Fragment>
      about
    </Fragment>
  );
}

export default About;
