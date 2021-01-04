import Demo1 from '../routes/demo1';
import Demo2 from '../routes/demo2';
import Demo3 from '../routes/demo3';

const RoutesConfig = [
  {
    key: 'demo1',
    path: '/demo1',
    component: Demo1,
  },
  {
    key: 'demo2',
    path: '/demo2',
    component: Demo2,
    exact: true,
  },
  {
    key: 'demo3',
    path: '/demo2/demo3',
    component: Demo3,
  },
];

export default RoutesConfig;
