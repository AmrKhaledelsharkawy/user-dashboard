import { Action, createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure, loadUser, loadUserSuccess, loadUserFailure } from '../actions/user.actions';
import { User } from '../../../core/models/user.model';

export interface UserState {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  error: string;
}

export const initialState: UserState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: ''
};

const userReducer = createReducer(
  initialState,
  on(loadUsers, state => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(loadUser, state => ({ ...state, loading: true })),
  on(loadUserSuccess, (state, { user }) => ({ ...state, selectedUser: user, loading: false })),
  on(loadUserFailure, (state, { error }) => ({ ...state, error, loading: false }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}

// Define and export the AppState interface
export interface AppState {
  user: UserState;
}