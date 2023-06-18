import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ETimeFilterType, EVehicleType } from '../core/constants/common';
import { VehicleService } from '../core/services/vehicle.service';
import { IVehicle } from '../core/models/vehicle.mode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  vehicleTypes = EVehicleType;
  totalVahicle: number;
  totalCar: number;
  totalTrack: number;
  totalMicrobus: number;
  eTimeFilterType = ETimeFilterType;
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private vehicle: VehicleService
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.getvehicles();
  }

  getvehicles(): void {
    const totalVahicles = this.vehicle.getVehicles();
    this.totalVahicle = totalVahicles?.length;
    this.totalCar = this.filterByVehicleType(totalVahicles, this.vehicleTypes['Car'])
    this.totalTrack = this.filterByVehicleType(totalVahicles, this.vehicleTypes['Truck'])
    this.totalMicrobus = this.filterByVehicleType(totalVahicles, this.vehicleTypes['Microbus'])
  }

  filterByVehicleType(totalVehicle: IVehicle[], vehicleType: string): number {
    return totalVehicle?.filter(item => item.vehicleType === vehicleType).length;
  }


  initializeForm(): void {
    this.form = this.fb.group({
      date: this.fb.control(null, []),
    });
  }

}
