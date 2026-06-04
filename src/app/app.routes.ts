import { Routes } from '@angular/router';
import { HomeHome } from './home-home/home-home';
import { ServicesHome } from './services-home/services-home';
import { ContactHome } from './contact-home/contact-home';

export const routes: Routes = [
    { path: 'home', component: HomeHome },
    { path: 'services', component: ServicesHome },
    { path: 'projects', component: ContactHome },
    { path: 'contact', component: ContactHome },
    { path: '', redirectTo:'/home', pathMatch:'full' }
];
