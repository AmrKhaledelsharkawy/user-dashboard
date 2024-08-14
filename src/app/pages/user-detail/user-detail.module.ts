import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class UserDetailModule { }
