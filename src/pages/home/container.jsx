import React from 'react';
import { Layout } from 'antd';

import HomePageContent from './HomePageContent';
import GlobalHeader from '../../components/Header/index';
import GlobalFooter from '../../components/Footer/index';
import './homePageContent.scss';

const {
  Header, Footer, Sider, Content,
} = Layout;

const HomePage = () => (
  <Layout>
    <Layout>
      <Header>
        <GlobalHeader />
      </Header>
      <Content>
        <HomePageContent />
      </Content>
      <Footer>
        <GlobalFooter />
      </Footer>
    </Layout>
    <Sider>
      Sider
    </Sider>
  </Layout>
);

export default HomePage;
