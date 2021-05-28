import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../../Components/Button';

import './introPage.css';

const IntroPage = () => {
  const history = useHistory();
  const { maxScore } = useSelector((state) => state);

  const handlePlayButton = () => {
    history.push('/game-play-page');
  };

  const handleScoreTableButton = () => {
    history.push('/score-table-page');
  };

  return (
    <div className="intro-page-wrapper">
      <h1>Welcome To The Game: Guess The Word</h1>
      <div className="intro-page-buttons">
        <Button
          text="Play!"
          width="150px"
          height="80px"
          handleButton={handlePlayButton}
        />
        <Button
          text="Table scores"
          width="150px"
          height="80px"
          handleButton={handleScoreTableButton}
        />
      </div>
      <h2>Your Maximum Score: {maxScore}</h2>
    </div>
  );
};

export default IntroPage;
