import React from 'react';
import { Input } from 'antd';
import config from '../../config/input';
import './index.css';

const Demo1: React.FC = () => {
  return (
    <div className='wrapper'>
      <div className='left'>
        {
          config.map(i => {
            return (
              <div key={i.key} className='info'>
                <span className='text'>{i.info}</span>
                <Input className='input' placeholder={i.placeholder} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default Demo1;
