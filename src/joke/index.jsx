import React from 'react';

const Likes = () => {
  const props = ({ userAvatar, userName, text, likes, dislikes } = props);
  return (
    <div>
      <div className="joke__container">
        <div className="joke__user">
          <img className="user-avatar" src={oldman} alt="oldman" />
          <div className="user-name">Neroxx</div>
        </div>
        <div className="joke__text">
          The secret service isn't allowed to yell "Get down!" anymore when the
          president is about to be attacked. Now they have to yell "Donald,
          duck!"
        </div>
      </div>

      <Likes />
    </div>
  );
};
