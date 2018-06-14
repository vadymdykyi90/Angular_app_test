import { Action } from '@ngrx/store';

import { User } from '../../models/user.model';

export const REQUEST_USERS = '[USERS] Requested';
export const LOAD_USERS = '[USERS] Loaded';

export class RequestUsers implements Action {
  readonly type = REQUEST_USERS;
}

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;

  constructor(
    public payload: User[]
  ) {}
}

export type Action = RequestUsers | LoadUsers;
