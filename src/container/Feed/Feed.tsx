import * as React from 'react';
import { Helmet } from "react-helmet";

// Component Imports
import TopNav from '../../components/TopNav/'
import Sidebar from '../../components/Sidebar/';
import Post from '../../components/Post';

function Feed () {
  let arr: any[] = []

  interface PostInterface {
    user: string
    handle: string
    content: string
  }

  const [feed, setFeed] = React.useState(arr)
  let testArray: PostInterface[] = [
    {user: "TSM Myth", handle: "@tsm_myth", content: "I'm smarter than Elon Musk."},
    {user: "NRG Aceu", handle: "@aceu", content: "I could probably build a rocket if I had the time."},
    {user: "Rordan Gamsey", handle: "@rordan_gamsey", content: "Why is the food bloody raw?"}
  ]
  React.useEffect (() => {
    function getFeed () {
      setFeed(testArray)
    }
    getFeed();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Feed must be mapped here and passed into Post component as props

  console.log("Feed: ", feed)
  console.log("Type: ", typeof(feed))

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
        <section className="flex justify-center">
          <Post feed={feed}/>
        </section>
      </div>
      <Sidebar />
    </div>
    </div>
  );
};


export default Feed;