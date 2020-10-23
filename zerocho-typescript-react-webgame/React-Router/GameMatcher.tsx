import * as React from 'react';
import { Component } from 'react';
import NumberBaseball from '../numbers/Numbers';
import RSP from '../RSP/RSP';
import Lotto from '../Lotto/Lotto';
import { RouteChildrenProps } from 'react-router';


class GameMatcher extends Component<RouteChildrenProps<{name: string}>> {
  render() {
    // 이건 URL Querystring 가져오는 것
    let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
    console.log(urlSearchParams.get('hello'));
    if(!this.props.match) {
      return (
        <div>
          일치하는 게임이 없습니다.
        </div>
      );
    }
    if (this.props.match.params.name === 'number-baseball') {
      return <NumberBaseball />
    } else if (this.props.match.params.name === 'rock-scissors-paper') {
      return <RSP />
    } else if (this.props.match.params.name === 'lotto-generator') {
      return <Lotto />
    } else {
      return (
        <div>
          일치하는 게임이 없습니다.
        </div>
      ); 
    }
    
  }
}

export default GameMatcher;
