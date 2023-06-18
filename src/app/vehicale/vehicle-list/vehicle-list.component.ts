import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IVehicle, IVehicleList } from 'src/app/core/models/vehicle.mode';
import { VehicleService } from 'src/app/core/services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  listOfData: IVehicle[] = [];
  constructor(
    private router: Router,
    private vehicleService: VehicleService
  ) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.listOfData = this.vehicleService.getVehicles();
  }

  navigateToVehicleForm(): void {
    this.router.navigate(['vehicle/add'])
  }

  navigateForEdit(id: string): void {
    this.router.navigate(['vehicle/edit', id])
  }

}



