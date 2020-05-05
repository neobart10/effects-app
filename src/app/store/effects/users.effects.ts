import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType } from "@ngrx/effects";
import {loadUsers, loadUsersSuccess, loadUsersError} from "../actions";
import {catchError, map, mergeMap, tap} from "rxjs/operators";
import {UserService} from "../../services/user.service";
import { of } from "rxjs";

@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  loadUsers$ = createEffect(
    () => this.actions$.pipe(
      ofType( loadUsers ),
      mergeMap(
        () => this.userService.getUsers()
          .pipe(
            map( users => loadUsersSuccess({ users: users } ) ),
            catchError( err => of(loadUsersError( { payload: err } )) )
          )
      )
    )
  );

}
