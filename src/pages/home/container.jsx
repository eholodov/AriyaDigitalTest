import React from 'react';
import { Layout } from 'antd';

import HomePageContent from './HomePageContent';
import GlobalHeader from '../../components/GlobalHeader/index';
import HomeSider from './components/HomeSider';

import './homePageContent.less';

const {
  Sider, Content,
} = Layout;

const HomePage = () => (
  <Layout>
    <header>
      <GlobalHeader />
    </header>
    <Layout>
      <Content theme="light">
        <HomePageContent />
      </Content>
      <Sider theme="light" style={{ background: '#f0f2f5' }} width="400">
        <HomeSider />
      </Sider>
    </Layout>
  </Layout>
);

export default HomePage;
