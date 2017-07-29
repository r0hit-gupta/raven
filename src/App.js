import React, { Component } from 'react';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar/Sidebar';
import LiveTraffic from './components/LiveTraffic/LiveTraffic';
import AmbulanceTracker from './components/LiveTraffic/AmbulanceTracker';
const { Header, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout style={{ flexDirection: 'row' }}>
        <Sidebar />
        <Layout>
          <Header style={{padding: '0 30px', color: 'white', fontSize: 20, fontWeight: 100}}>Dashboard</Header>
          <Content style={{ padding: 30 }}>
            <div style={styles.card}>
            <AmbulanceTracker />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const styles = {
  card: {
    width: '100%',
    height: '82vh',
    background: 'white',
    boxShadow: '0px 2px 15px rgba(0,0,0,.2)',
    borderRadius: '3px',
  }
};
export default App;
