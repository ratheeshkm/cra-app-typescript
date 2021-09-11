import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

const MainNavbar = (props: any) => (
  <AppBar elevation={0} {...props}>
    <Toolbar sx={{ height: 64 }}>Logo</Toolbar>
  </AppBar>
);

export default MainNavbar;
