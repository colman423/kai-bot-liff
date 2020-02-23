import React, { useState, Fragment } from 'react';
import AppRoutes from './wrappers/AppRoutes';
import theme from './wrappers/Theme';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

function App() {
  console.log("App")
  return (
    <Fragment>
      234234234
      {/* <MuiThemeProvider theme={theme}> */}
        <CssBaseline />
        <AppRoutes />
      {/* </MuiThemeProvider> */}
    </Fragment>
  );
}

export default App;
