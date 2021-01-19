import * as Routes from '../routes/index';

const RoutesConfig = [
  {
    key: 'home',
    path: '/app/home',
    component: Routes.Home,
  },
  {
    key: 'react',
    path: '/app/react',
    component: Routes.React,
    exact: true,
  },
  {
    key: 'baseJs',
    path: '/app/basejs',
    component: Routes.BaseJs,
  },
  {
    key: 'dvajs',
    path: '/app/dvajs',
    component: Routes.DvaJS,
  },
  {
    key: 'redux',
    path: '/app/redux',
    component: Routes.Redux,
  },
  {
    key: 'dva',
    path: '/app/dva',
    component: Routes.React,
    exact: true,
  },
  {
    key: 'webpack',
    path: '/app/webpack',
    component: Routes.Webpack,
  },
  {
    key: 'auth',
    path: '/app/auth',
    component: Routes.Auth,
    exact: true,
  },
];

export default RoutesConfig;
