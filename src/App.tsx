import React from 'react';
import { Route, Routes } from "react-router-dom";

import * as ROUTES from './constants/routes';

import Sidebar from './components/Sidebar/index'
import Topnav from './components/TopNav';

import { Feed, Profile } from './container/index';
import { NotFound } from './container/index';

function App() {
  return (
    <div id='App' className='flex'>
      <Routes>
        <Route path={ROUTES.Feed} element={<Feed />}/>
        <Route path={ROUTES.Profile} element={<Profile />}/>
        <Route path={ROUTES.NotFound} element={<NotFound />}/>
      </Routes>
    </div>
  );
};

export default App;
