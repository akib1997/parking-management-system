import { Injectable } from '@angular/core';
import { IVehicle } from '../models/vehicle.mode';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getVehicles(): IVehicle[] {
    let currentVehicles: IVehicle[] = JSON.parse(localStorage.getItem('vehicles')!);
    return currentVehicles
  }

  getVehicle(id: string): IVehicle {
    let currentVehicles: IVehicle[] = JSON.parse(localStorage.getItem('vehicles')!);
    const indexToUpdate = currentVehicles.findIndex(item => item.id === id);
    return currentVehicles[indexToUpdate];
  }

  storeVehicle(payload: IVehicle): void {
    let currentVehicles: IVehicle[] = JSON.parse(localStorage.getItem('vehicles')!) || [];
    currentVehicles.push(payload);
    localStorage.setItem('vehicles', JSON.stringify(currentVehicles));
  }


  updateVehicle(payload: IVehicle, id: string) {
    let currentVehicles: IVehicle[] = JSON.parse(localStorage.getItem('vehicles')!);
    const indexToUpdate = currentVehicles.findIndex(item => item.id === id);

    if (indexToUpdate !== -1) {
      currentVehicles[indexToUpdate] = payload;
    }
    localStorage.setItem('vehicles', JSON.stringify(currentVehicles));
  }


}
