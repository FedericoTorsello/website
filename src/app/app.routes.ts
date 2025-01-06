import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CvComponent } from './pages/cv/cv.component';

export const routes: Routes = [
    // { 
    //     path: 'home', 
    //     component: HomeComponent 
    // },
    {
        path: 'cv',
        title: 'cv',
        loadComponent: () => CvComponent
    },
    {
        path: '',
        redirectTo: '/cv',
        pathMatch: 'full'
    },
];
