import React, { useState } from 'react';
import btnup from '../img/like-up.png';
import btndown from '../img/like-down.png';

const Likes = () => {
  const [likeIncrement, setLikeIncrement] = useState(0);
  const [likeDecrement, setLikeDecrement] = useState(0);
  return (
    <div className="likes__container">
      <button
        className="likes-count btn-like--up btn-like"
        onClick={() => setLikeIncrement(likeIncrement + 1)}
      ></button>
      <span className="likes-count--up likes-count">{likeIncrement}</span>
      <button
        className="likes-count btn-like--down btn-like"
        onClick={() => setLikeDecrement(likeDecrement + 1)}
      ></button>
      <span className="likes-count--down likes-count">{likeDecrement}</span>
    </div>
  );
};

export default Likes;
