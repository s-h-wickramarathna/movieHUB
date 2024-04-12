import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { WatchFilmComponent } from './watch-film/watch-film.component';
import { AllFilmsComponent } from './all-films/all-films.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AdminManageUsersComponent } from './component/admin-manage-users/admin-manage-users.component';
import { AdminManageMoviesComponent } from './component/admin-manage-movies/admin-manage-movies.component';
import { AdminUpdateFilmComponent } from './component/admin-update-film/admin-update-film.component';
import { AdminAddFilmComponent } from './component/admin-add-film/admin-add-film.component';
import { FavoriteComponent } from './component/favorite/favorite.component';
import { AdminAddUserComponent } from './component/admin-add-user/admin-add-user.component';
import { AdminUpdateUserComponent } from './component/admin-update-user/admin-update-user.component';

export const routes: Routes = [
  { path: '', component: AuthComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'watch-film/:id', component: WatchFilmComponent },
  { path: 'films', component: AllFilmsComponent },
  {
    path: 'admin', component: AdminHomeComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'manage-users', component: AdminManageUsersComponent },
      { path: 'manage-Films', component: AdminManageMoviesComponent },
      { path: 'manage-Films/info/:id', component: AdminUpdateFilmComponent },
      { path: 'manage-Films/add', component: AdminAddFilmComponent },
      { path: 'manage-users/add', component: AdminAddUserComponent },
      { path: 'manage-users/info/:id', component: AdminUpdateUserComponent },
    ]
  },
  {path: 'my-favorite', component:FavoriteComponent},
];
