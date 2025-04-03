import { InjectionToken } from '@angular/core';
import { Routes } from '@angular/router';
import { remixHome4Fill, remixArticleLine } from '@ng-icons/remixicon';

type RouteDetail = {
  url: string,
  title: string,
  icon: string
};

const page: Record<'home' | 'cv', RouteDetail> = {
  home: {
    url: 'home',
    title: 'Home',
    icon: remixHome4Fill
  },
  cv: {
    url: 'cv',
    title: 'CV',
    icon: remixArticleLine
  },
} as const;

export const PAGES = new InjectionToken<typeof page>('PAGES', {
  providedIn: 'root',
  factory: () => page,
});

const { cv, home } = page;
export const routes: Routes = [
  {
    path: home.url,
    title: home.title,
    loadComponent: () => import('./pages/home-page/home-page.component')
  },
  {
    path: cv.url,
    title: cv.title,
    loadComponent: () => import('./pages/cv/cv.component')
  },
  {
    path: '',
    redirectTo: home.url,
    pathMatch: 'full'
  },
];
