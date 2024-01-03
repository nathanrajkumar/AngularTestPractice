import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryRoot } from '../form/country-root/country-root.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CountryDetailComponent } from '../form/country-detail/country-detail.component';

const routes : Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'countries',
    component: CountryRoot
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'details/:id',
    component: CountryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
