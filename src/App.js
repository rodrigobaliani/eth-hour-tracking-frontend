import './App.css';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";


import Sidebar from './components/layout/Sidebar'
import NavHeader from './components/layout/NavHeader'

import { Layout } from 'antd';
import { Routes } from './Routes';

const { Content } = Layout;



class App extends React.Component {

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sidebar />
          <Layout className="site-layout">
            <NavHeader />
            <Content style={{ margin: '0 16px' }}>
              <Routes />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}



export default App;

