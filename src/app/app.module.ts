import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/comp/navbar/navbar.component';
import { SinglefairComponent } from './components/comp/singlefair/singlefair.component';
import { HomeComponent } from './components/comp/home/home.component';
import { AboutComponent } from './components/comp/about/about.component';
import { FairsCardComponent } from './components/comp/fairs-card/fairs-card.component';
import { DashboardFairsComponent } from './components/comp/dashboard-fairs/dashboard-fairs.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SinglefairComponent,
    HomeComponent,
    AboutComponent,
    FairsCardComponent,
    DashboardFairsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
