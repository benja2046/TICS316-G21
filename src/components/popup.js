import React from 'react';
import './popup.css';
import Avatar from '@mui/material/Avatar';

function Popup({ post, onClose }) {
    if (!post) return null; // No mostrar el Popup si no hay publicación seleccionada

    return (
        <>
            <div className="popup-background" onClick={onClose}></div>
            <div className="popup">
                <div className="popup_header">
                    <div className='popup_header_left'>
                        <Avatar
                            className='popup_avatar'
                            alt={post.username}
                            src={post.avatarImage}
                            sx={{ width: 24, height: 24 }}
                        />
                        <h3>{post.username}</h3>
                    </div>

                    <div className='popup_header_rigth'>
                        <button className='popup_btn' onClick={onClose}>Cerrar</button>
                    </div>

                </div>

                <img className="popup_image" src={post.image} alt="postImage" />

                <h4 className='popup_title'>
                    <strong>{post.username}: </strong> {post.title}
                </h4>

                <p className='popup_description'>{post.description}</p>


            </div>
        </>
    );
}

export default Popup;