import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './frontEnd/Pages/home-page/home-page.component';
import { AboutPageComponent } from './frontEnd/Pages/about-page/about-page.component';
import { ContactPageComponent } from './frontEnd/Pages/contact-page/contact-page.component';
import { ProjectPageComponent } from './frontEnd/Pages/project-page/project-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'aboutMe', component: AboutPageComponent},
  {path: 'contactMe', component: ContactPageComponent},
  {path: 'projects', component: ProjectPageComponent},
  {path: '**', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
