import React from 'react';

import {
  Layout,
} from 'antd';

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
            Content
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}
