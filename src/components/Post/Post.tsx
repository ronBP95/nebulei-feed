import React from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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
        <div className="w-2/3 h-auto">
            {feed.map((item: any) => {
                return (
                    <div className="flex flex-row w-full justify-start mt-10 mr-0 sm: mr-16 border rounded-md">
                        <div className="flex ml-3 mr-3 mt-3">
                            <AccountCircleIcon sx={{fontSize: "48px"}}/>
                        </div>
                        <div>
                            <div className="flex gap-3 mb-3 mt-3">
                                <p>{item.user}</p>
                                <p>{item.handle}</p>
                            </div>
                            <p className='flex gap-3 mb-3'>{item.content}</p>
                            <ul className='flex gap-3 mb-3'>
                                <li><ChatBubbleOutlineIcon /></li>
                                <li><FavoriteBorderIcon /></li>
                                <li><SportsMmaIcon /></li>
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Post;