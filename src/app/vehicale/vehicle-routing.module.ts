import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';



const routes: Routes = [
  {
    component: VehicleListComponent,
    path: '',
  },
  {
    component: VehicleFormComponent,
    path: 'add',
  },
  {
    component: VehicleFormComponent,
    path: 'edit/:id',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleRoutingModule {}
