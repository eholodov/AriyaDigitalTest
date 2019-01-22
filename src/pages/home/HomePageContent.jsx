import React from 'react';
import PositionTable from './components/Positions';

const HomePageContent = () => (
  <main className="home-page-content">
    <div className="home-page-content__wrapper">
      <h1 className="home-page-content__title">
        Portfolio
      </h1>
      <div className="home-page-content__container">
        <PositionTable />
      </div>
    </div>
  </main>
);

export default HomePageContent;
