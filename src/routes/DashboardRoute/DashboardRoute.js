import React from 'react';
import CustomCarousel from '../../components/Carousel/Carousel';
import UserStatusBar from '../../components/UserStatusBar/UserStatusBar';
import './Dashboard.css';

export default function DashboardRoute() {
  return (
    <div className='page-wrapper'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <h2>Asher's Dashboard</h2>
        <UserStatusBar />
      </div>

      <CustomCarousel />

      <CustomCarousel />

      <CustomCarousel />

      <CustomCarousel />
    </div>
  );
}
