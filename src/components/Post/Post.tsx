import React from 'react'

const Post = () => {
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
  
    console.log("Feed: ", feed)
    return (
        <div>
            <p>Post Component</p>
        </div>
    )
}

export default Post;