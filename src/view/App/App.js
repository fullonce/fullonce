/*
 * @Author: your name
 * @Date: 2020-01-27 15:59:49
 * @LastEditTime : 2020-01-28 23:00:24
 * @LastEditors  : Please set LastEditors
 * @Description: 公共首页
 * @FilePath: \fullonce\src\App.js
 */
import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';

import Side from './Side.jsx';
import Breadcrumb from './Breadcrumb.jsx';
import Test from '../../components/BoundTest.jsx'

const { Header, Content } = Layout;

function Item() {
  return (<div>11111</div>)
}
function Item2() {
  return (<div>22222</div>)
}
function App() {
  return (
    <Layout style={{ 'height': '100%' }}>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        {/* 侧边导航 */}
        <Side />
        <Layout style={{ padding: '0 24px 24px' }}>
          {/* 面包屑 */}
          <Breadcrumb />
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Route path="/" component={Test} exact />
            <Route path="/two" component={Item2} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
