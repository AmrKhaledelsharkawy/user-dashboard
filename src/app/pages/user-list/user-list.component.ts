import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../shared/store/reducers/user.reducer';
import { loadUsers } from '../../shared/store/actions/user.actions';
import { User } from '../../core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]> = new Observable<User[]>();
  loading$: Observable<boolean> = new Observable<boolean>();
  currentPage: number = 1;
totalUsers: any;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.loadUsers(this.currentPage);
  }

  loadUsers(page: number) {
    this.store.dispatch(loadUsers({ page }));
  }

  onUserClick(userId: number) {
    this.router.navigate(['/user-detail', userId]);
  }
}
