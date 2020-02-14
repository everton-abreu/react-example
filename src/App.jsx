import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { Layout } from 'antd';

import PrivatedRoute from './utils/privatedRoute';
import { HelloWorld } from './components';
import Home from './pages/home';
import HomeWithContent from './pages/home2';

const {
  Sider, Content, Header, Footer,
} = Layout;

function CustomLayout({ children }) {
  return (
    <Layout className="layout">
      <Sider theme="light" style={{ height: '100vh', position: 'fixed' }}>Lado</Sider>
      <Layout style={{ marginLeft: '200px', textAlign: 'center', minHeight: '100vh' }}>
        <Header style={{ padding: 0, background: '#fff' }}>Header</Header>
        <Content style={{ margin: '16px', display: 'flex' }}>
          { children }
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}
function AppWithLayout({ base = '' }) {
  return (
    <CustomLayout>
      <>
        <PrivatedRoute exact path={`${base}/`} component={Home} redirectTo="/" />
        <PrivatedRoute exact path={`${base}/alternative`} component={HomeWithContent} redirectTo="/" />
      </>
    </CustomLayout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <AppWithLayout base="/home" />
        <Redirect from="/*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
