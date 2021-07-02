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
  const [isValid, setIsValid] = useState(true);

  const handleGameOverButton = () => {
    setIsValid(true);
    if (userName.length > 1 && userPhone !== '') {
      // Validation for userPhone and userName.
      store.dispatch(addUserDetailsAction(userName, userPhone));
      history.push('/');
    } else {
      setIsValid(false);
    }
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
      {!isValid ? (
        <h5 style={{ color: 'red' }}>
          Name must be at least 2 chars and phone number is required !{' '}
        </h5>
      ) : (
        ''
      )}
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
