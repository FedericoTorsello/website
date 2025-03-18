import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/cv/cv.component')
  },
  // {
  //   path: 'home',
  //   loadComponent: () => import('./pages/home/home.component')
  // },
  {
    path: 'cv',
    title: 'cv',
    loadComponent: () => import('./pages/cv/cv.component')
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];
