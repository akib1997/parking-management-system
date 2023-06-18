import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './vehicale/vehicle-list/vehicle-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    component: DashboardComponent,
    path: '',
  },
  {
    path: 'vehicle',
    loadChildren: () => import('./vehicale/vehicle.module').then(m => m.VehicleModule)
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
