import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { addUserDetailsAction } from '../../actions/actions';
import store from '../../store/store';

import './gameOverPage.css';

const GameOverPage = () => {
  const history = useHistory();

  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const handleGameOverButton = () => {
    store.dispatch(addUserDetailsAction(userName, userPhone));
    history.push('/');
  };

  const handleUserName = ({ target }) => {
    setUserName(target.value);
  };

  const handleUserPhone = ({ target }) => {
    const phone = Number(target.value);
    setUserPhone(phone);
  };

  return (
    <div className="game-over-wrapper">
      <div className="game-over-inputs">
        <Input placeholderText="Your name" handleUserInput={handleUserName} />
        <Input placeholderText="Your phone" handleUserInput={handleUserPhone} />
      </div>
      <div className="game-over-button">
        <Button
          text="Intro Page"
          width="230px"
          height="70px"
          handleButton={handleGameOverButton}
        />
      </div>
    </div>
  );
};

export default GameOverPage;
