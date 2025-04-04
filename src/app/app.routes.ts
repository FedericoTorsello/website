import { InjectionToken } from '@angular/core';
import { Routes } from '@angular/router';
import { remixHome4Fill, remixArticleLine } from '@ng-icons/remixicon';

type RouteDetail = {
  url: string,
  title: string,
  icon: string,
  hidden?: boolean
};

type Pages = 'home' | 'cv' | 'guides';

const page: Record<Pages, RouteDetail> = {
  home: {
    url: 'homePage',
    title: 'Home',
    icon: remixHome4Fill
  },
  cv: {
    url: 'cv',
    title: 'CV',
    icon: remixArticleLine
  },
  guides: {
    url: 'guides',
    title: 'Guides',
    icon: remixArticleLine,
    hidden: true
  },
} as const;

export const PAGES = new InjectionToken<typeof page>('PAGES', {
  providedIn: 'root',
  factory: () => page,
});

const { cv, home, guides } = page;
export const routes: Routes = [
  {
    path: home.url,
    title: home.title,
    loadComponent: () => import('./pages/home-page/home-page.component'),
  },
  {
    path: cv.url,
    title: cv.title,
    loadComponent: () => import('./pages/cv/cv.component')
  },
  {
    path: guides.url,
    title: guides.title,
    loadComponent: () => import('./pages/guides/guides.component')
  },
  {
    path: '',
    redirectTo: home.url,
    pathMatch: 'full'
  },
];
