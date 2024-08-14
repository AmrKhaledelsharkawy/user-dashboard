import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../shared/store/reducers/user.reducer';
import { loadUser } from '../../shared/store/actions/user.actions';
import { User } from '../../core/models/user.model';
import { selectCurrentUser } from '../../shared/store/selectors/user.selectors';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user$: Observable<User | null>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.user$ = this.store.select(selectCurrentUser);
  }

  ngOnInit() {
    const userId = +(this.route.snapshot.paramMap.get('id') || 0);
    if (userId) {
      this.store.dispatch(loadUser({ id: userId }));
    } else {
      console.error('Invalid user ID');
    }
  }

  goBack() {
    window.history.back();
  }
}