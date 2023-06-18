import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EVehicleType } from 'src/app/core/constants/common';
import { IVehicle } from 'src/app/core/models/vehicle.mode';
import { NavigateService } from 'src/app/core/services/navigate.service';
import { VehicleService } from 'src/app/core/services/vehicle.service';
import { markAllControlsAsDirty } from 'src/app/core/utils/markAllControlsAsDirty';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss'],
})
export class VehicleFormComponent implements OnInit {
  vehicleForm: FormGroup<IVehicleForm>;
  vehicleTypes = EVehicleType;
  id: string;

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private navigateService: NavigateService,
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    if (this.id) {
      this.getVehicle();
    }
  }

  getVehicle(): void {
    const {
      vehicleLicenseNumber,
      vehicleOwnerAddress,
      vehicleOwnerName,
      vehicleOwnerPhone,
      vehicleStatus,
      vehicleType,
      carEntryDate,
      carExitDate,
      parkingCharge,
    } = this.vehicleService.getVehicle(this.id);
    this.vehicleForm.patchValue({
      vehicleLicenseNumber,
      vehicleOwnerAddress,
      vehicleOwnerName,
      vehicleOwnerPhone,
      vehicleStatus,
      vehicleType,
      carEntryDate,
      carExitDate,
      parkingCharge,
    });
  }

  submitForm(): void {
    const payload = this.vehicleForm.value as IVehicle;
    console.log(payload, 'payload');

    if (this.vehicleForm.invalid) {
      markAllControlsAsDirty([this.vehicleForm]);
      return;
    } else if (this.id) {
      this.vehicleService.updateVehicle(payload, this.id);
    } else {
      this.vehicleService.addVehicle(payload);
    }
  }

  initializeForm(): void {
    this.vehicleForm = this.fb.group<IVehicleForm>({
      vehicleOwnerName: this.fb.control(null, [Validators.required]),
      vehicleOwnerPhone: this.fb.control('', [Validators.required]),
      carEntryDate: this.fb.control('', [Validators.required]),
      carExitDate: this.fb.control('', [Validators.required]),
      parkingCharge: this.fb.control(null, [Validators.required]),
      vehicleLicenseNumber: this.fb.control(null, [Validators.required]),
      vehicleOwnerAddress: this.fb.control('', [Validators.required]),
      vehicleStatus: this.fb.control(null, [Validators.required]),
      vehicleType: this.fb.control(null, [Validators.required]),
    });
  }

  back(): void {
    this.navigateService.goBack();
  }
}

interface IVehicleForm {
  vehicleOwnerName: FormControl<IVehicle['vehicleOwnerName'] | null>;
  vehicleOwnerPhone: FormControl<IVehicle['vehicleOwnerPhone'] | null>;
  carEntryDate: FormControl<IVehicle['carEntryDate'] | null>;
  carExitDate: FormControl<IVehicle['carExitDate'] | null>;
  parkingCharge: FormControl<IVehicle['parkingCharge'] | null>;
  vehicleLicenseNumber: FormControl<IVehicle['vehicleLicenseNumber'] | null>;
  vehicleOwnerAddress: FormControl<IVehicle['vehicleOwnerAddress'] | null>;
  vehicleStatus: FormControl<IVehicle['vehicleStatus'] | null>;
  vehicleType: FormControl<IVehicle['vehicleType'] | null>;
}
