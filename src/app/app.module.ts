import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PagesComponent } from './frontEnd/pages/pages.component';
import { HomePageComponent } from './frontEnd/Pages/home-page/home-page.component';
import { ProjectPageComponent } from './frontEnd/Pages/project-page/project-page.component';
import { ContactPageComponent } from './frontEnd/Pages/contact-page/contact-page.component';
import { AboutPageComponent } from './frontEnd/Pages/about-page/about-page.component';
import { HeaderComponent } from './frontEnd/Pages/header/header.component';
import { FooterComponent } from './frontEnd/Pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PagesComponent,
    HomePageComponent,
    ProjectPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
