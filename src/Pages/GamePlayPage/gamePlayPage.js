import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Countdown from 'react-countdown';
import randomWords from 'random-words';

import Button from '../../Components/Button';
import Input from '../../Components/Input';

import './gamePlayPage.css';

import {
  levelRiseAction,
  scoreUpdateAction,
  decrementLife,
  initScoreAction,
  initLifeAction,
  userMaxScoreAction,
} from '../../actions/actions';
import store from '../../store/store';

const GamePlayPage = () => {
  const [randomWord, setRandomWord] = useState('');
  const [missingLettersWord, setMissingLettersWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [level, setLevel] = useState(0);
  const [isLose, setIsLose] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  const startDate = React.useRef(Date.now());

  const history = useHistory();
  const state = useSelector((state) => state);
  const { life, score } = useSelector((state) => state);

  console.log('State: ', state);
  console.log('life: ', life);

  useEffect(() => {
    GetRandomWord(level);
  }, []);

  /**
   * @description Generated random word by difficulty level.
   * @param {Number} difficulty
   */
  const GetRandomWord = (difficulty) => {
    const word = randomWords({ exactly: 1, maxLength: difficulty + 2 });
    console.log('random words:', word[0]);
    setRandomWord(word[0]);
    getMissingLettersWord(word[0]);
  };

  /**
   * @description Randomly replace letters from the generated word to '_' .
   * @param {string} randomW
   */
  const getMissingLettersWord = (randomW) => {
    let word = randomW;
    for (let index = 0; index < randomW.length; index++) {
      const i = Math.floor(Math.random() * word.length);
      word = word.substring(0, i) + '_' + word.substring(i + 1);
      // Validation
      if (index === 0 || randomW.length - 1 !== index) {
        console.log('WORD: ', word);
        setMissingLettersWord(word);
      }
    }
  };

  /**
   * @description Checking if the user's suggest is correct. If correct raise level and difficult else decrease user's life.
   */
  const handleCheckButton = () => {
    setWrongAnswer(false);
    if (userInput === randomWord) {
      // Checking user's guess.
      startDate.current = Date.now();
      store.dispatch(levelRiseAction); // Updating user's level.
      store.dispatch(scoreUpdateAction(10)); // Updating user's score.
      setLevel(level + 1);
      GetRandomWord(level + 1);
      setUserInput('');
    } else {
      setWrongAnswer(true);
      if (life === 1) {
        console.log('loose');
        setIsLose(true);
      }
      store.dispatch(decrementLife);
    }
  };

  /**
   * @description Setting user's input.
   * @param {{{value}}} event User's input value.
   */
  const HandleInput = (event) => {
    console.log('event', event);
    setUserInput(event.target.value);
  };

  /**
   * @description Init game's details and moving to Game over page.
   */
  const looseButton = () => {
    store.dispatch(initScoreAction);
    store.dispatch(initLifeAction);
    store.dispatch(userMaxScoreAction(score));
    history.push('/game-over-page');
  };

  /**
   * @description Handle complete count down.
   */
  const onCompleteCountDown = () => {
    setIsLose(true);
  };

  return (
    <div className="game-play-wrapper">
      {!isLose ? (
        <div className="game-play">
          <div className="countdown-wrapper">
            <h1>countdown: </h1>
            <div className="countdown">
              <Countdown
                style={{ fontSize: '40px' }}
                onComplete={onCompleteCountDown}
                date={startDate.current + 30000}
                autoStart={true}
                intervalDelay={0}
                precision={3}
                renderer={(props) => <div>{props.total}</div>}
              ></Countdown>
            </div>
          </div>
          <div className="game-play-page-subs-headers">
            <h1 style={{ marginRight: '50px' }}>Remaining guesses: {life}</h1>
            <h1>Your level: {level + 1}</h1>
          </div>
          <h1>Word: </h1>

          <h2>{missingLettersWord}</h2>

          <div className="game-play-input">
            <Input userInput={userInput} handleUserInput={HandleInput} />
          </div>
          {wrongAnswer ? (
            <h4 style={{ color: 'red' }}> Wrong guess! try something else! </h4>
          ) : (
            ''
          )}
          <Button
            handleButton={handleCheckButton}
            text="Check the guess !"
            width="230px"
            height="70px"
          />
        </div>
      ) : (
        <div className="game-play-loose">
          <h1>The word was: {randomWord}</h1>
          <h2>Your score: {score}</h2>
          <Button
            text="Game Over!"
            width="230px"
            height="70px"
            handleButton={looseButton}
          />
        </div>
      )}
    </div>
  );
};

export default GamePlayPage;
