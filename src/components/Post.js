import React from 'react'
import './Post.css'
import Avatar from '@mui/material/Avatar';
import Content from './Read-description';

function Post({ username, avatarImage, image, title, description, onClick }) {
    return (
        <div className='post_box'>
            <div className='post'>
                <div className='post_header'>
                    <Avatar
                        className='post_avatar'
                        alt={username}
                        src={avatarImage}
                        sx={{ width: 30, height: 30 }}
                    />
                    <h3>{username}</h3>
                </div>


                <a href="#" onClick={onClick}>
                    <img
                        className="post_image" src={image} alt="postImage" />
                </a>

                <h4 className='post_title'>
                    <strong>{username}: </strong> {title}
                </h4>

                <Content description={description} />




            </div>
        </div>
    )
}

export default Post
