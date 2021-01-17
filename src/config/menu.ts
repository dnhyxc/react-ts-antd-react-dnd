const menuList = [
  {
    title: '我的媒资',
    key: 'media',
    path: '',
    type: 'menu',
    children: [
      {
        key: 'home',
        path: '/app/home',
        power: true,
        title: '首页',
        type: 'function'
      },
      {
        key: 'self',
        path: '/app/self',
        power: true,
        title: '个人库',
        type: 'function'
      },
      {
        key: 'auth',
        path: '/app/auth',
        power: true,
        title: '权限配置',
        type: 'function'
      },
    ]
  },
  {
    title: '我的审批',
    key: 'apply',
    path: '',
    type: 'menu',
    children: [
      {
        key: 'apply',
        path: '/app/apply',
        power: true,
        title: '我的申请',
        type: 'function'
      },
      {
        key: 'approval',
        path: '/app/approval',
        power: true,
        title: '我的审批',
        type: 'function'
      },
      {
        key: 'face',
        path: '/app/face',
        power: true,
        title: '人脸管理',
        type: 'function'
      },
    ]
  },
  {
    title: '高级配置',
    key: 'advanced',
    path: '',
    type: 'menu',
    children: [
      {
        key: 'rich',
        path: '/app/rich',
        power: true,
        title: '文稿',
        type: 'function'
      },
      {
        key: 'share',
        path: '/app/share',
        power: true,
        title: '共享',
        type: 'function'
      },
      {
        key: 'user',
        path: '/app/user',
        power: true,
        title: '用户配置',
        type: 'function'
      },
    ]
  }
]

export default menuList;