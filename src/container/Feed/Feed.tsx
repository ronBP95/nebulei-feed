import React from 'react';
import { Helmet } from "react-helmet";

// Component Imports
import TopNav from '../../components/TopNav/'
import Sidebar from '../../components/Sidebar/';

function Feed() {

  return (
    <div className="w-full h-screen">
    <Helmet>
        <title>Feed | Nebulei</title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
    </Helmet>
    <div className='flex flex-row'>
      <div>
        <TopNav />
          <section className="">
            Feed Page!
          </section>
      </div>
      <Sidebar />
    </div>
    </div>
  );
};


export default Feed;