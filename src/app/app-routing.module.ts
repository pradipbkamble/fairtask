import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/comp/home/home.component';
import { AboutComponent } from './components/comp/about/about.component';

import { FairsCardComponent } from './components/comp/fairs-card/fairs-card.component';
import { SinglefairComponent } from './components/comp/singlefair/singlefair.component';
import { DashboardFairsComponent } from './components/comp/dashboard-fairs/dashboard-fairs.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"home",
    component:AboutComponent
  },
  {
    path:"Fairs",
    component:DashboardFairsComponent,
    children:[{
      path:":fairid",
      component:SinglefairComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
