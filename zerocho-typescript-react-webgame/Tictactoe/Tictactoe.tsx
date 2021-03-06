import * as React from 'react';
import { useEffect, useCallback, useReducer, Reducer } from 'react';
import Table from './Table';

interface ReducerState {
  winner: 'O' | 'X' | '',
  turn: 'O' | 'X',
  tableData: string[][],
  recentCell: [number, number],
}

const initialState: ReducerState ={
  winner: '',
  turn: 'O',
  tableData:[
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  recentCell: [-1, -1],
}

// 이렇게 액션들을 만들어둘 수 있다.
export const SET_WINNER  = 'SET_WINNER'  as const;
export const CLICK_CELL  = 'CLICK_CELL'  as const;
export const CHANGE_TURN = 'CHANGE_TURN' as const;
export const RESET_GAME  = 'RESET_GAME'  as const;

interface SetWinnerAction {
  type: typeof SET_WINNER;
  winner: 'O' | 'X' | '';
}

//Action Creator : winner가 바뀌는 경우 처리 위해 필요하다. 
const setWinner = (winner: 'O' | 'X' | ''): SetWinnerAction => {
  return { type:SET_WINNER, winner };
};

interface ClickCellAction {
  type: typeof CLICK_CELL;
  row :number;
  cell:number; 
}

// row, col 위치 나타내는 Action
export const clickCell = (row: number, cell: number): ClickCellAction => {
  return { type: CLICK_CELL, row, cell};
};

interface ChangeTurnAction {
  type: typeof CHANGE_TURN;
}

interface ResetGameAction {
  type: typeof RESET_GAME;
}

type ReducerActions = SetWinnerAction | ClickCellAction | ChangeTurnAction | ResetGameAction;
//                 old                action                    new state
const reducer = (state: ReducerState, action: ReducerActions): ReducerState => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    };
    case CHANGE_TURN: {
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O',
      }
    }
    case RESET_GAME: {
      return {
        ...state,
        turn: 'O',
        tableData: [
          ['','',''],
          ['','',''],
          ['','',''],
        ],
        recentCell: [-1, -1],
      }
    }
    default:
      return state;
  }
}

const TicTacToe = () => {
  const [state, dispatch] = useReducer<React.Reducer<ReducerState, ReducerActions>>(reducer, initialState);
  const { tableData, turn, winner, recentCell } = state;

  useEffect(() => {
    const [row, cell] = recentCell; // 가장 최근에 누른칸 
    if(row < 0) {
      return;
    }
    let win = false;

    if(tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
      win = true;
    }
    if(tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
      win = true;
    }
    if(tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
      win = true;
    }
    if(tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
      win = true;
    }

    if(win) {
      dispatch({type: SET_WINNER, winner: turn});
      dispatch({type: RESET_GAME});
    } else {
      let all = true;
      tableData.forEach((row: string[]) => {
        row.forEach((cell) => {
          if(!cell) {
            all = false;
          }
        })
      })
      if(all) {
        dispatch({ type: RESET_GAME});
        dispatch(setWinner(''))
      } else {
        dispatch({type: CHANGE_TURN});
      }
    }
  }, [recentCell]);

  const onClickTable = useCallback(() => {
    dispatch(setWinner('O'));
  }, []);

  return (
    <>
      <Table onClick={onClickTable} tableData={tableData} dispatch={dispatch} />
      {winner && <div>{winner}님의 승리</div>}
    </>
  )
}

export default TicTacToe;