import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {AppState} from "../../store/app.reducers";
import {Store} from "@ngrx/store";
import {loadUsers} from "../../store/actions";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  users: User[] = [];
  loading = false;
  error: any;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {

    this.store.select('users')
      .subscribe( ({users, loading, error}) => {
        this.users = users;
        this.loading = loading;
        this.error = error;
      } )

    this.store.dispatch( loadUsers() )

    // this.userService.getUsers()
    //   .subscribe( users => {
    //     this.users = users;
    //   });
  }

}
