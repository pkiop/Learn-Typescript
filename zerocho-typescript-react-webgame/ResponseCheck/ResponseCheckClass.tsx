import * as React from 'react';
import { Component, createRef } from 'react';


interface IState {
  state: 'waiting' | 'now' | 'ready';
  message: String;
  result: number[];
}

class ResponseCheck extends Component<{}, IState> {

  state: IState = {
    state: 'waiting',
    message: '클릭해서 시작하세요',
    result: []
  }

  timeout:   number | null = null;
  startTime: number | null = null;
  endTime:   number | null = null;

  onClickScreen = () => {
    const { state } = this.state;
    if(state === 'waiting') {
      this.timeout = window.setTimeout(() => {
        this.setState({
          state:'now',
          message: '지금 클릭',
        });
        this.startTime = new Date().getTime();
      }, Math.floor(Math.random() * 1000) + 2000);
      this.setState(() => {
        return {
          state: 'ready',
          message: '초록색이 되면 클릭하세요.'
        }
      })
    } else if (state === 'ready') {
      clearTimeout(this.timeout!);
      this.setState(() => {
        return {state: 'waiting',
        message: '너무 성급하시군요!@ ',
      }})
    } else if (state === 'now') {
      this.endTime = new Date().getTime();
      this.setState((prevState) => {
        return {
          state: 'waiting',
          message: '클릭해서 시작하세요.',
          result: [...prevState.result, this.endTime! - this.startTime!],
        };
      });
    }
  };

  onReset = React.useCallback(() => {
    this.setState(() => {
      return {
        result: []
      }
    })
  }, [])


  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0
      ? null
      : <>
          <div>평균시간 : {result.reduce((a,c) => a+c) / result.length}ms</div>
          <button onClick={this.onReset}>리셋</button>
        </>
  }

  render() {
    return(
      <>
      <div>시작짓</div>
      <div
        id="screen"
        className = {this.state.state}
        onClick={this.onClickScreen}
      >
        {this.state.message}
      </div>
      {this.renderAverage()}
    </>
    )
  }
}

export default ResponseCheck;
