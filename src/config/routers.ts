import Demo1 from '../routes/demo1';
import Demo2 from '../routes/demo2';
import Demo3 from '../routes/demo3';

const RoutesConfig = [
  {
    key: 'home',
    path: '/app/home',
    component: Demo1,
  },
  {
    key: 'self',
    path: '/app/self',
    component: Demo2,
    exact: true,
  },
  {
    key: 'auth',
    path: '/app/auth',
    component: Demo3,
  },
  {
    key: 'apply',
    path: '/app/apply',
    component: Demo1,
  },
  {
    key: 'approval',
    path: '/app/approval',
    component: Demo2,
    exact: true,
  },
  {
    key: 'face',
    path: '/app/face',
    component: Demo3,
  },
  {
    key: 'share',
    path: '/app/share',
    component: Demo1,
  },
  {
    key: 'rich',
    path: '/app/rich',
    component: Demo2,
    exact: true,
  },
  {
    key: 'user',
    path: '/app/user',
    component: Demo3,
  },
];

export default RoutesConfig;
