import { User } from '../../models/user.model';

import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as UserActions from '../actions/user.actions';

interface UserState {
  users: User[];
}

export const getUsers = createSelector(
  createFeatureSelector('UserStore'),
  (state: UserState) => state.users
);

export function reducer(state: UserState = {users: []}, action: UserActions.Action) {

  switch (action.type) {

    case UserActions.LOAD_USERS:

      return {...state, users: [...action.payload] };

    default:
      return state;
  }

}

