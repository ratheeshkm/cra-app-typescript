import * as React from 'react';
import { Outlet } from 'react-router';
import { styled } from '@material-ui/core/styles';

import MainNavBar from 'src/components/MainNavBar';

const MainLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
}));

const MainLayout = () => {
  return (
    <MainLayoutRoot>
      <MainNavBar />
      <Outlet />
    </MainLayoutRoot>
  );
};

export default MainLayout;
