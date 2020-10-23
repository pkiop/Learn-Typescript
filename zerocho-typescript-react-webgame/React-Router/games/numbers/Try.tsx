import * as React from 'react';
import {TryInfo} from './types';

const Try: React.FunctionComponent<{tryInfo: TryInfo}> = ({ tryInfo} : {tryInfo: TryInfo}) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  )
};
// JS로 react할 때 => PropTypes => 설치했음. Props의 타입을 검사해주는 패키지.
// Typescript를 쓰면 이걸 설치할 필요 없음
export default Try;