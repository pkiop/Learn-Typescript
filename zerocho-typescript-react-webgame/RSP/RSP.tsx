import * as React from 'react';
import { useState, useCallback } from 'react';

const val = ['rock', 'scissors', 'paper'];

const RSP = () => {
  const [hands, setHands] = useState('');
  const [myHands, setMyHands] = useState('');
  const [result, setResult] = useState('');

  const play = async (myHandValue: string) => {
    const systemHand = val[Math.floor(Math.random()*3)];
    setHands(systemHand);
    if(systemHand === myHandValue) {
      setResult('비겼습니다.');
      console.log("set 비겼습니다.");
    } else {
      setResult('귀찮습니다.');
      console.log("set 귀찮습니다..");
    }
  }

  const onClick = useCallback( async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const myHandValue= e.currentTarget.value;
    setMyHands(myHandValue);
    play(myHandValue);
  }, [hands, myHands, result]);

  return (
    <>
      {hands === '' ? '' : <div>PC는 {hands} 를 낸 상태입니다.</div>}
      <div>{myHands} 를 낸 상태입니다.</div>
      <button onClick={onClick} value='rock'>ROCK</button>
      <button onClick={onClick} value='scissors'>SCISSORS</button>
      <button onClick={onClick} value='paper'>PAPER</button>
      {result === '' ? '' : <div>결과는 "{result}" 입니다.</div>}
    </>
  )
}

export default RSP;