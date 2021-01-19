import React from 'react';
import MTree from '../../components/Tree';
import { reactTreeData } from '../../config/treeData';
import './index.less';

const UseReact: React.FC = () => {
  return (
    <div className='reactWrapper'>
      <MTree data={reactTreeData} />
    </div>
  )
};

export default UseReact;
