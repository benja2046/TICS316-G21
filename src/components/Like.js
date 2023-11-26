import React, { useState } from 'react';
import './like.css';

const LikeButton = () => {
  const [likes, setLikes] = useState(12);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <div className='likebtn'>
      <button className={`like-button ${isClicked && 'liked'}`} onClick={handleClick} style={{ background: 'transparent', border: 'none' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`heart-icon ${isClicked && 'red'}`} // Agrega la clase 'gray' cuando está clicado
          width="40"
          height="40"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#9e9e9e"
          fill="#9e9e9e"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
        <span className="likes-counter">{`${likes}`}</span>
      </button>
    </div>
  );
};

export default LikeButton;
