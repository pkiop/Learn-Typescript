import { produce } from 'immer';
import { LOG_IN_REQUEST, LOG_IN_FAILURE, LOG_IN_SUCCESS,
        LogInFailureAction, LogInRequestAction, LogInSuccessAction, LogOutAction, LOG_OUT
} from '../actions/user';

export interface UserState {
  isLoggingIn: boolean,
  data: {
    nickname: string,
  } | null
}

const initialState = {
  isLoggingIn: false,
  data: null,
};

type UserReducerActions = LogInFailureAction | LogInRequestAction | LogInSuccessAction | LogOutAction;
const userReducer = (prevState = initialState, action: UserReducerActions) => {
  return produce(prevState, (draft: {data: null | {userId: number, nickname: string}, isLoggingIn: boolean}) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.data = null;
        draft.isLoggingIn = true;
        break;
      case LOG_IN_SUCCESS:
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
      case LOG_IN_FAILURE:
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      case LOG_OUT:
        draft.data = null;
        break;
      default:
        break;
    }
  })
}

export default userReducer;