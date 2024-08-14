import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app.routes';
import { HeaderComponent } from './shared/components/header/header.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserService } from './core/services/user.service';
import { UserEffects } from '../app/shared/store/effects/user.effects';
import { reducer } from '../app/shared/store/reducers/user.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    HeaderComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ userState: reducer }),
    EffectsModule.forRoot([UserEffects]),
    BrowserAnimationsModule,
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [UserService]
})
export class AppModule { }