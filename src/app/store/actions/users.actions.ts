//Actions
import {createAction, props} from '@ngrx/store';
import {User} from "../../models/user.model";

export const loadUsers = createAction('[Users] load users');

export const loadUsersSuccess = createAction(
  '[Users] load users success',
  props< { users: User[] } >()
);

export const loadUsersError = createAction(
  '[Users] load users error',
  props< { payload: any } >()
);

