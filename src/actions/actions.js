export const levelRiseAction = {
  type: 'gamePlay/riseLevel',
  payload: 'riseLevel',
};

export const scoreUpdateAction = (number) => {
  return {
    type: 'scoreUpdate',
    payload: number,
  };
};

export const decrementLife = {
  type: 'lifeUpdate/decrementLife',
  payload: 'decrementLife',
};

export const initLifeAction = {
  type: 'initLife',
  payload: 'initLife',
};

export const initScoreAction = {
  type: 'initScore',
  payload: 'initScore',
};

export const userMaxScoreAction = (userScore) => {
  return {
    type: 'userMaxScore',
    payload: userScore,
  };
};

export const addUserDetailsAction = (userName, userPhone) => {
  return {
    type: 'addUserDetails',
    payload: {
      userName,
      userPhone,
    },
  };
};

// export const countdownOver = () => {
//   return {
//     type: 'gamePlay/countdownOver',
//     payload: 'gamePlay/countdownOver',
//   };
// };
