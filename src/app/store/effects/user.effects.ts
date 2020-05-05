import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType } from "@ngrx/effects";
import {loadUserSuccess, loadUserError, loadUser} from "../actions";
import {catchError, map, mergeMap, tap} from "rxjs/operators";
import {UserService} from "../../services/user.service";
import { of } from "rxjs";

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  loadUser$ = createEffect(
    () => this.actions$.pipe(
      ofType( loadUser ),
      mergeMap(
        ( action ) => this.userService.getUserById( action.id )
          .pipe(
            map( user => loadUserSuccess({ user: user } ) ),
            catchError( err => of(loadUserError( { payload: err } )) )
          )
      )
    )
  );

}
