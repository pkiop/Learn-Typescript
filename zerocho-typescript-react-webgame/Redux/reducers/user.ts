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
  switch (action.type) {
    case LOG_IN_REQUEST:
    case LOG_IN_SUCCESS:
    case LOG_IN_FAILURE:
    case LOG_OUT:
    default:
      return prevState;
  }
}

export default userReducer;