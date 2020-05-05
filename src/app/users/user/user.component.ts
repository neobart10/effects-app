import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppState} from "../../store/app.reducers";
import {Store} from "@ngrx/store";
import {loadUser} from "../../store/actions";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  user: User;
  loading= false;
  error: any;

  constructor( private router: ActivatedRoute,
               private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('user').subscribe( ({ user, loading, error }) => {
      console.log(user);
      this.user = user;
      this.loading = loading;
      this.error = error;
    } )

    this.router.params.subscribe( ( { id } ) => {
      this.store.dispatch( loadUser(  { id: id}  ) );
    } );
  }

}
