import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/user.reducer';
import { UserState } from '../reducers/user.reducer';

export const selectUserState = (state: AppState) => state.user;

export const selectUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

export const selectCurrentUser = createSelector(
  selectUserState,
  (state: UserState) => state.selectedUser
);