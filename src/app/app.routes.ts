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

export const routes: Routes = [
  { path: '', component: AuthComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'watch-film', component: WatchFilmComponent },
  { path: 'films', component: AllFilmsComponent },
  {
    path: 'admin', component: AdminHomeComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'manage-Users', component: AdminManageUsersComponent },
      { path: 'manage-Films', component: AdminManageMoviesComponent },
      { path: 'manage-Films/info', component: AdminUpdateFilmComponent },
      { path: 'manage-Films/add', component: AdminAddFilmComponent },
    ]
  },
];
