import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
import { ReviewUsComponent } from './client/review-us/review-us.component';
import { LoginComponent } from './admin/login/login.component';
import { AboutUsComponent } from './client/about-us/about-us.component';
import { CarrersComponent } from './client/carrers/carrers.component';
import { UpcomingprojectsComponent } from './client/upcomingprojects/upcomingprojects.component';
import { WebdevelopmentComponent } from './client/static/webdevelopment/webdevelopment.component';
import { SeoComponent } from './client/static/seo/seo.component';
import { AdrioddevelopmentComponent } from './client/static/adrioddevelopment/adrioddevelopment.component';
import { TermsandconditionsComponent } from './client/static/termsandconditions/termsandconditions.component';
import { BlogsComponent } from './client/static/blogs/blogs.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UpcomingprojectComponent } from './admin/upcomingproject/upcomingproject.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'review-us',
    component:ReviewUsComponent
  },
  {
    path:"carrers-for-you",
    component:CarrersComponent
  },
  {
    path:'webdevelopment',
    component:WebdevelopmentComponent
  },
  {
    path:'androiddevelopment',
    component:AdrioddevelopmentComponent
  },
  {
    path:'seooptimization',
    component:SeoComponent
  },
  {
    path:'blogs',
    component:BlogsComponent
  },
  {
    path:'terms_condition&privacy_policy',
    component:TermsandconditionsComponent
  },
  {
    path:'upcomingprojects',
    component:UpcomingprojectsComponent,
  },
  {
     path:'admin',
     component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'addupcomingprojects',
    component:UpcomingprojectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
