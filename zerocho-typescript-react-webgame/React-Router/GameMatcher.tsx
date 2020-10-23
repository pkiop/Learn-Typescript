import * as React from 'react';
import Numbers from './games/numbers/Numbers';
import RSP from '../RSP/RSP';
import Lotto from '../Lotto/Lotto';
import {useRouteMatch, useLocation, useHistory} from 'react-router';


const GameMatcher = () => {
  const match = useRouteMatch<{name: string}>();
  const location = useLocation();
  const history = useHistory();
  if(!match) {
    return (
      <div>
        일치하는 게임이 없습니다.
      </div>
    );
  }
  if (match.params.name === 'number-baseball') {
    return <Numbers />
  } else if (match.params.name === 'rock-scissors-paper') {
    return <RSP />
  } else if (match.params.name === 'lotto-generator') {
    return <Lotto />
  } else {
    return (
      <div>
        일치하는 게임이 없습니다.
      </div>
    ); 
  }
  
}

export default GameMatcher;
