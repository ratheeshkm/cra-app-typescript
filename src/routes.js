import React from 'react';
import { Navigate } from 'react-router-dom';

import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';

import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
