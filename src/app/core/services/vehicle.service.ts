import { Injectable } from '@angular/core';
import { IVehicle } from '../models/vehicle.mode';
import { StorageService } from './storage.service';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(
    private storageService: StorageService
  ) {}

  getVehicles(): IVehicle[] {
    return this.storageService.getVehicles();
  }

  getVehicle(id: string): IVehicle {
    return this.storageService.getVehicle(id);
  }

  addVehicle(payload: IVehicle): void {
    const myId = uuid.v4();
    payload.id = myId;
    this.storageService.storeVehicle(payload);
  }

  updateVehicle(payload: IVehicle, id: string): void {
    this.storageService.updateVehicle(payload, id);
  }
}
