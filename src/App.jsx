/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2022-03-29 14:55:23
 * @LastEditTime: 2022-03-29 15:38:06
 * @LastEditors: Fenghua Zhang
 */
import React from 'react'
import { Outlet, useLocation, Navigate} from 'react-router-dom'
import store from './store/index';
import LayoutBox from './views/components/layout/Layout';

function App() {
  const lo = useLocation().pathname;
  const isLogin = JSON.stringify(store.getState().user) !== '{}';
  return (
    <>
      {lo === '/login' ? <Outlet /> : isLogin? <LayoutBox content={<Outlet />} />:<Navigate to="/login"  />}
    </>
  );
}

export default App;
