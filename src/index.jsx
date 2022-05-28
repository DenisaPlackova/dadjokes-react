import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import oldman from '../src/img/user01.png';

import Likes from './likes';

const App = () => (
  <div>
    <div className="joke__container">
      <div className="joke__user">
        <img className="user-avatar" src={oldman} alt="oldman" />
        <div className="user-name">Neroxx</div>
      </div>
      <div className="joke__text">
        The secret service isn't allowed to yell "Get down!" anymore when the
        president is about to be attacked. Now they have to yell "Donald, duck!"
      </div>
    </div>

    <Likes />
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
