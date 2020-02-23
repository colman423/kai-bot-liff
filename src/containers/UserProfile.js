import React, { Fragment, useEffect } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import { getVersion } from '../utils/common'
import { Grid } from '@material-ui/core';
import HomeLink from '../components/HomeLink'

function UserProfile() {
  console.log("UserProfile func")
  useEffect(() => {
    console.log("UserProfile init")
  }, [])
  return (
    <Fragment>
      UserProfile
    </Fragment>
  );
}

export default UserProfile;
