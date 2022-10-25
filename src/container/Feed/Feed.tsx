import * as React from 'react';
import { Helmet } from "react-helmet";

// Component Imports
import TopNav from '../../components/TopNav/'
import Sidebar from '../../components/Sidebar/';
import Post from '../../components/Post';

function Feed() {
  let arr: number[] = []

  const [feed, setFeed] = React.useState(arr)
  let testArray: number[] = [1, 2, 3, 4]

  React.useEffect (() => {
    function getFeed () {
      setFeed(testArray.map(x => x))
    }
    getFeed();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Feed must be mapped here and passed into Post component as props

  console.log("Feed: ", feed)

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
          <Post />
        </section>
      </div>
      <Sidebar />
    </div>
    </div>
  );
};


export default Feed;