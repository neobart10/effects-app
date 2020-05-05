import { ActionReducerMap } from '@ngrx/store';
import * as reducer from './reducers';

export interface AppState {
  users: reducer.UsersState,
  user: reducer.UserState
}



export const appReducers: ActionReducerMap<AppState> = {
  users: reducer.usersReducer,
  user: reducer.userReducer,
}
