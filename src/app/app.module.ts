import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { ReviewUsComponent } from './client/review-us/review-us.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AboutUsComponent } from './client/about-us/about-us.component';

//imports
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CarrersComponent } from './client/carrers/carrers.component';
import { AdrioddevelopmentComponent } from './client/static/adrioddevelopment/adrioddevelopment.component';
import { SeoComponent } from './client/static/seo/seo.component';
import { UpcomingprojectsComponent } from './client/upcomingprojects/upcomingprojects.component';
import { TermsandconditionsComponent } from './client/static/termsandconditions/termsandconditions.component';
import { UpcomingprojectComponent } from './admin/upcomingproject/upcomingproject.component';
import { BlogsComponent } from './client/static/blogs/blogs.component';
import { AuthInterceptor } from './authhandler/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewUsComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    CarrersComponent,
    AdrioddevelopmentComponent,
    SeoComponent,
    UpcomingprojectsComponent,
    TermsandconditionsComponent,
    UpcomingprojectComponent,
    BlogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
