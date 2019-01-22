import React from 'react';
import { Menu, Icon, Avatar } from 'antd';

import './header.less';

const GlobalHeader = () => (
  <div className="global-header">
    <div className="global-header__menu">
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
          Your Account
          <Icon type="caret-down" />
        </Menu.Item>
        <Menu.Item key="2">
          Invest
          <Icon type="caret-down" />
        </Menu.Item>
        <Menu.Item key="3">
          Resources
          <Icon type="caret-down" />
        </Menu.Item>
      </Menu>
    </div>
    <div className="global-header__account">
      <Icon type="bell" />
      <div className="global-header__user-info">
        <Avatar size={27} icon="user" />
        <span className="name">
          Joseph
        </span>
        <Icon type="caret-down" />
      </div>
    </div>
  </div>
);

export default GlobalHeader;
