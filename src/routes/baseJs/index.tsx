// import React from 'react';
// import Header from '../../components/Header';
// import { Tree } from 'antd';

// import './index.less';

// const { TreeNode } = Tree;

// const data = {
//   child: [
//     {
//       name: 'aaa',
//       id: '0',
//       child: [
//         {
//           name: 'aaa-111',
//           id: 'a1',
//           child: [
//             {
//               name: 'aaa-111-000',
//               id: 'a1-0'
//             }
//           ]
//         }
//       ]
//     },
//     {
//       name: 'bbb',
//       id: '1',
//       child: [
//         {
//           name: 'bbb-111',
//           id: 'b1'
//         }
//       ]
//     },
//   ]
// }

// function treeRender(menuList: any) {
//   return (
//     <>
//       {menuList.map((item: any, i: number) => (
//         <TreeNode
//           title={item.name} key={item.id}
//         >
//           {item.child ? treeRender(item.child) : null}
//         </TreeNode>
//       ))}
//     </>
//   );
// }

// const BaseJs: React.FC = () => {
//   return (
//     <div className='baseWrapper'>
//       <div className='left'>
//         <Tree defaultExpandAll blockNode defaultSelectedKeys={['0']}>
//           {treeRender(data.child)}
//         </Tree>
//       </div>
//       <div className='right'>
//         <Header>
//           BASEJS
//         </Header>
//         content
//       </div>
//     </div >
//   )
// }

// export default BaseJs;


import { Input } from 'antd';
import React from 'react';
import Header from '../../components/Header';
import MTree from '../../components/Tree';

import './index.less';

const data = {
  child: [
    {
      name: 'DOM&BOM',
      id: 'base',
      child: [
        {
          name: 'dom',
          id: 'dom',
          child: [
            {
              name: 'createElement',
              id: 'create',
              child: [
                {
                  name: 'outerHtml',
                  id: 'outer-html'
                }
              ]
            }
          ]
        },
        {
          name: 'bom',
          id: 'bom',
          child: [
            {
              name: 'localtion',
              id: 'localtion',
              child: [
                {
                  name: 'pathnane',
                  id: 'pathnane'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'ASYNC',
      id: 'async',
      child: [
        {
          name: 'fetch',
          id: 'fetch'
        },
        {
          name: 'promise',
          id: 'promise'
        },
        {
          name: 'generator',
          id: 'generator'
        },
      ]
    },
    {
      name: 'HTTP',
      id: 'http',
      child: [
        {
          name: 'cookie',
          id: 'cookie'
        },
        {
          name: 'session',
          id: 'session'
        },
        {
          name: 'websoket',
          id: 'websoket'
        },
      ]
    },
  ]
}

const BaseJs: React.FC = () => {
  return (
    <div className='baseWrapper'>
      <MTree data={data} />
      <div className='right'>
        <Header title={'BASEJS'}>
          <Input className='baseInput' />
        </Header>
        content
      </div>
    </div >
  )
}

export default BaseJs;
