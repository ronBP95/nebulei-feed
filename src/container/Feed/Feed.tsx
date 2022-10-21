import * as React from 'react';
import { Helmet } from "react-helmet";

// Component Imports
import TopNav from '../../components/TopNav/'
import Sidebar from '../../components/Sidebar/';

function Feed() {
  type NumberArray = Array<number>;
  const [feed, setFeed] = React.useState(NumberArray)
  const testFeed: number[] = [1, 2]
  function doubleNumber() {
    testFeed.map((item) => {
      setFeed(item)
    })
  }

  React.useState(() => {
    doubleNumber()
  }, []) 


  return (
    <div className="w-full h-screen">
    <Helmet>
        <title>Feed | Nebulei</title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
    </Helmet>
    <div className='flex flex-row'>
      <div className="flex flex-col w-full">
        <TopNav />
        <section className="relative">
          {feed}
        </section>
      </div>
      <Sidebar />
    </div>
    </div>
  );
};


export default Feed;