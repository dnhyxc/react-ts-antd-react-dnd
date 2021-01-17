import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
// import icon from '../../assets/image/logo.png';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import menuList from '../../config/menu';
import './index.less';

const MMenu: React.FC = () => {
  const [isUp, setIsUp] = useState<boolean>(false);
  const [isMediaUp, setIsMediaUp] = useState<boolean>(false);
  const [isApplyUp, setisApplyIsUp] = useState<boolean>(false);
  const [isAdvancedUp, setIsAdvancedUp] = useState<boolean>(false);
  const [mediaKey, setMediaKey] = useState<string>();
  const [applyKey, setApplyKey] = useState<string>();
  const [advancedKey, setAdvancedKey] = useState<string>();

  const menuRef: any = useRef();

  const onTitleClick = (key: string) => {
    setIsUp(!isUp);
    console.log(key);
    switch (key) {
      case 'media':
        setIsMediaUp(!isMediaUp);
        setMediaKey(key);
        break;
      case 'apply':
        setisApplyIsUp(!isApplyUp);
        setApplyKey(key);
        break;
      case 'advanced':
        setIsAdvancedUp(!isAdvancedUp);
        setAdvancedKey(key);
        break;

      default:
        break;
    }
    // menuRef.current.toggle('close');
    console.log(menuRef.current.className);
    console.log(menuRef.current);
  };

  return (
    <div className='menu'>
      {/* <div className='header'>
        <img className='logo' src={icon} alt="" />
        <div className='title'>融媒体</div>
      </div> */}
      {
        menuList.map(i => {
          return (
            <div key={i.key} className='menuList'>
              <div className='menuTitle' >
                <div className='title' onClick={() => onTitleClick(i.key)}>
                  {i.title}
                  {(isMediaUp && i.key === mediaKey) || (isApplyUp && i.key === applyKey) || (isAdvancedUp && i.key === advancedKey) ? <UpOutlined /> : <DownOutlined className='icon' />}
                </div>
                {/* <div className={'itemList'} ref={menuRef}> */}
                <div className={(isMediaUp && i.key === mediaKey) || (isApplyUp && i.key === applyKey) || (isAdvancedUp && i.key === advancedKey) ? 'close' : 'itemList'} ref={menuRef}>
                  {i.children.map(i => {
                    return (
                      <div key={i.key} className='menuItem'>
                        <NavLink activeClassName='active' className='link' to={i.path}>{i.title}</NavLink>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default MMenu;