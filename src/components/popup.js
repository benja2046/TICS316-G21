import React, { useState, useEffect } from 'react';
import './popup.css';
import Avatar from '@mui/material/Avatar';
import LikeButton from './Like';

function Popup({ post, onClose, comments, onCommentChange, onPostComment }) {
    const [comment, setComment] = useState('');


    if (!post) return null;

    const postComment = (event) => {
        event.preventDefault();
        // Llamar a la función onPostComment con el nuevo comentario
        onPostComment({ username: "TomasPantoja", text: comment });
        // Limpiar el campo de comentario
        setComment('');
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
        onCommentChange(e); // Puedes llamar a onCommentChange aquí si es necesario
    };

    const handlePostComment = (event) => {
        event.preventDefault();
        // Validar que el comentario no esté vacío
        if (comment.trim() === "") {
            return;
        }
    
        // Pasar el nuevo comentario al componente padre
        onPostComment({ username: "TomasPantoja", text: comment });
    
        setComment(""); // Limpiar el campo de comentario
    };


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

                <div className="post_comments">
                    {comments.map((c, index) => (
                        <p key={index}>
                             <strong>{c.username} </strong> {c.text} 
                        </p>
                    ))}
                </div>

                <LikeButton/>
                <form className='post_commentBox' onSubmit={postComment}>
                    <input
                        className="post_input"
                        type="text"
                        placeholder='Agregar comentario...'
                        value={comment}
                        onChange={handleCommentChange}
                    />
                    <button
                        className="post_button"
                        disabled={!comment}
                        type='submit'
                    >
                        Publicar
                    </button>
                </form>



            </div>
        </>
    );
}

export default Popup;