import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchTerm: string = '';

  constructor(private router: Router) {}

  searchUser() {
    this.router.navigate(['/user-list'], { queryParams: { search: this.searchTerm } });
  }
}
