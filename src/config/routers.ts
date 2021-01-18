import Redux from '../routes/redux';
import React from '../routes/react';
import Dva from '../routes/dva';
import BaseJs from '../routes/baseJs';
import Webpack from '../routes/webpack';
import Auth from '../routes/auth';
import Home from '../routes/home';

const RoutesConfig = [
  {
    key: 'home',
    path: '/app/home',
    component: Home,
  },
  {
    key: 'react',
    path: '/app/react',
    component: React,
    exact: true,
  },
  {
    key: 'baseJs',
    path: '/app/basejs',
    component: BaseJs,
  },
  {
    key: 'BASEJS',
    path: '/app/dvajs',
    component: Dva,
  },
  {
    key: 'redux',
    path: '/app/redux',
    component: Redux,
  },
  {
    key: 'dva',
    path: '/app/dva',
    component: React,
    exact: true,
  },
  {
    key: 'webpack',
    path: '/app/webpack',
    component: Webpack,
  },
  {
    key: 'auth',
    path: '/app/auth',
    component: Auth,
    exact: true,
  },
];

export default RoutesConfig;
