import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/image/logo.png';
import { DownOutlined } from '@ant-design/icons';
import './index.less';

const MMenu: React.FC = () => {

  return (
    <div className='menu'>
      {/* <div className='header'>
        <img className='logo' src={icon} alt="" />
        <div className='title'>融媒体</div>
      </div> */}
      <div className='menuInfo'>
        <div className='itemList'>
          <div className='item-title'>demo1 <DownOutlined /></div>
          <Link to='/demo1'>
            <div className='item'>aaaaa</div>
          </Link>
          <Link to='/demo2'>
            <div className='item'>bbbbb</div>
          </Link>
          <Link to='/demo2/demo3'>
            <div className='item'>ccccc</div>
          </Link>
        </div>
        <div className='itemList'>
          <div className='item-title'>demo2 <DownOutlined /></div>
          <div className='item'>aaaaa</div>
          <div className='item'>bbbbb</div>
          <div className='item'>ccccc</div>
        </div>
        <div className='itemList'>
          <div className='item-title'>demo3 <DownOutlined /></div>
          <div className='item'>aaaaa</div>
          <div className='item'>bbbbb</div>
          <div className='item'>ccccc</div>
        </div>
      </div>
    </div>
  )
}

export default MMenu;