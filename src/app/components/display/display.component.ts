import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { User } from '../../models/user.model';

import { AppState } from '../../app.state';

import { UserService } from '../../services/user.service';

import * as UserReducer from '../../store/reducers/user.reducer';
import * as UserActions from '../../store/actions/user.actions';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  users$: Observable<User[]>;

  constructor (
    private userService: UserService,
    private store: Store<AppState>
  ) {
    this.store.dispatch(new UserActions.RequestUsers());
    this.users$ = this.store.select(UserReducer.getUsers);
  }

}
