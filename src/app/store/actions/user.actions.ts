//Actions
import {createAction, props} from '@ngrx/store';
import {User} from "../../models/user.model";

export const loadUser = createAction(
  '[User] load user',
  props<{ id: string }>()
);

export const loadUserSuccess = createAction(
  '[User] load user success',
  props< { user: User } >()
);

export const loadUserError = createAction(
  '[User] load user error',
  props< { payload: any } >()
);

