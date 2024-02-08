import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
    { path: '' , redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent},
    { path: 'home', component: HomePageComponent}
];
