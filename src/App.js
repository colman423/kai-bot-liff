import React, { useState, Fragment } from 'react';
import AppRoutes from './wrappers/AppRoutes';
import theme from './wrappers/Theme';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { getVersion } from './utils/common';

function App() {
  console.log("App")
  return (
    <Fragment>
      {getVersion()}
      <br />
      {window.location.href}

      {/* <MuiThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
      <AppRoutes />
      {/* </MuiThemeProvider> */}
    </Fragment>
  );
}

export default App;
