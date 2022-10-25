import React from 'react'

interface PostInterface {
    user: string
    handle: string
    content: string
}

interface IProps {
    feed: any
}

const Post = ({ feed }: IProps) => {
    

    return (
        // <div className="flex flex-col justify-center w-1/2 bg-blue-400 mr-0 sm: mr-16">
        //     <div className="flex gap-3">
        //         <p>Display Name</p>
        //         <p>User @Handle</p>
        //     </div>
        //     <p>Content</p>
        //     <ul className='flex gap-3'>
        //         <li>Comment</li>
        //         <li>Like / Dislike</li>
        //         <li>Duel</li>
        //     </ul>
        // </div>
        <div>
            {feed.map((item: { user: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {
                return <div>{item.user}</div>
            })}
        </div>
    )
}

export default Post;