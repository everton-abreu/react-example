import React from 'react';

import {
  Layout,
} from 'antd';

import { Link } from 'react-router-dom';

import './styles.css';

const {
  Sider, Header, Content, Footer,
} = Layout;
export default function Home() {
  return (
    <Layout className="layout">
      <Sider theme="light" style={{ height: '100vh', position: 'fixed' }}>Lado</Sider>
      <Layout style={{ marginLeft: '200px', textAlign: 'center', minHeight: '100vh' }}>
        <Header style={{ padding: 0, background: '#fff' }}>Header</Header>
        <Content style={{ margin: '16px', display: 'flex' }}>
          <div style={{ flex: 1, padding: '24px', background: '#fff' }}>
            <Link to="home2">
              Home com conteudo
            </Link>
            <h1>Content</h1>
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}
