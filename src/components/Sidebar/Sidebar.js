import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Logo from './Logo';
import traffic_icon from '../../images/traffic_icon.png';

export default class Sidebar extends Component {
  render() {
    return (
      <Layout.Sider style={{ height: '100vh', flex: '0 0 300px' }}>
        <Logo />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <img src={traffic_icon} style={styles.icon}/>
            <span>Live Traffic</span>
          </Menu.Item>
          <Menu.Item key="2">

          </Menu.Item>
          <Menu.Item key="3">

          </Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  }
}

const styles = {
  icon: {
    width: 30,
    marginRight: 10,
    marginTop: 5,
    verticalAlign: 'top'
  }
}
