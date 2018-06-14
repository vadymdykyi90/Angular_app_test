import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { UserService } from '../../services/user.service';

import * as UserActions from '../actions/user.actions';

import { User } from '../../models/user.model';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  @Effect()
  loadUsers$ = this.actions$.ofType(UserActions.REQUEST_USERS).pipe(
    switchMap(() => this.userService.getUsers()),
    map((users: User[]) =>  {
      return new UserActions.LoadUsers(users);
    })
  );

}
