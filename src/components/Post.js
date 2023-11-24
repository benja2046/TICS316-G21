import React from 'react'
import './Post.css'
import Avatar from '@mui/material/Avatar';
import Content from './Read-description';

function Post({username, avatarImage, image, title, description}) {
    return (
        <div className='post_box'>
        <div className='post'>
            <div className='post_header'>
                <Avatar
                    className='post_avatar'
                    alt={username}
                    src={avatarImage}
                    sx={{ width: 24, height: 24 }}
                />
                <h3>{username}</h3>
            </div>

            {/* header --> acount ---> username */}

            <img 
                className="post_image" src={image} alt="postImage" />
            {/* IMAGE */}
            <h4 className='post_title'>
                <strong>{username}: </strong> {title}
            </h4>

            <Content description={description}/>

            {/* <p className='post_description'> {description}</p> */}
            {/* username + caption */}


        </div>
        </div>
    )
}

export default Post
