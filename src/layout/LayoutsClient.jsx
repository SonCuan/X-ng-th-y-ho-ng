import React from 'react'
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const LayoutsClient = () => {
  return (
    <div>
        <Header />
        <div className="main">
          <Outlet />
        </div>
    </div>
  )
}

export default LayoutsClient;
