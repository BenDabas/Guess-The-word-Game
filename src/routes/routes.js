import { Route, Switch } from 'react-router-dom';

import IntroPage from '../Pages/IntroPage/introPage';
import GamePlayPage from '../Pages/GamePlayPage/gamePlayPage';
import GameOverPage from '../Pages/GameOverPage/gameOverPage';
import ScoreTablePage from '../Pages/ScoreTablePage/scoreTablePage';

const routes = () => {
  return (
    <div className="routes-wrapper">
      <Switch>
        <Route path="/" exact component={IntroPage} />
        <Route path="/game-play-page" exact component={GamePlayPage} />
        <Route path="/game-over-page" exact component={GameOverPage} />
        <Route path="/score-table-page" exact component={ScoreTablePage} />
      </Switch>
    </div>
  );
};

export default routes;
