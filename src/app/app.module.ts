import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommingsoonComponent } from './commingsoon/commingsoon.component';

//ROUTING 
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ShortlistComponent } from './shortlist/shortlist.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { MobileresponsiveComponent } from './mobileresponsive/mobileresponsive.component';

@NgModule({
  declarations: [
    AppComponent,
    CommingsoonComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    HomeComponent,
    ShortlistComponent,
    RecommendationComponent,
    MobileresponsiveComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home', component: HomeComponent,
        children: [
          { path: 'dash', component: DashboardComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'shortlist', component: ShortlistComponent },
          { path: 'recom', component: RecommendationComponent },
           { path: '', redirectTo: 'dash', pathMatch: 'full' }

        ]
      },
      { path: 'commingSoon', component: CommingsoonComponent },
      { path: 'login', component: LoginComponent },
    ], { useHash: true })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
