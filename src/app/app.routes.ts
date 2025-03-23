import { Routes } from '@angular/router';

type RouteDetail = {
  url: string,
  title: string
};

export const routeDetails = {
  home: {
    url: 'home',
    title: 'Home'
  } as RouteDetail,
  cv: {
    url: 'cv',
    title: 'CV'
  } as RouteDetail,
} as const;


export const routes: Routes = [
  {
    path: routeDetails.home.url,
    title: routeDetails.home.title,
    loadComponent: () => import('./pages/home/home.component')
  },
  {
    path: routeDetails.cv.url,
    title: routeDetails.cv.title,
    loadComponent: () => import('./pages/cv/cv.component')
  },
  {
    path: '',
    redirectTo: routeDetails.home.url,
    pathMatch: 'full'
  },
];
