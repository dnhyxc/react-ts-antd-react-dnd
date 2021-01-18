import React from 'react';
import MTree from '../../components/Tree';
import { treeData } from '../../config/treeData';
import './index.less';

const UseReact: React.FC = () => {
  return (
    <div className='reactWrapper'>
      <MTree data={treeData} />
    </div>
  )
};

export default UseReact;
