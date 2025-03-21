import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component')
  },
  {
    path: 'cv',
    title: 'cv',
    loadComponent: () => import('./pages/cv/cv.component')
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
