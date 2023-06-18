import { EVehicleType } from "../constants/common";

export interface IVehicle {
  id?: string;
  vehicleLicenseNumber: number,
  vehicleOwnerAddress: string,
  vehicleType: EVehicleType,
  vehicleOwnerName: string,
  vehicleOwnerPhone: string,
  vehicleStatus: boolean,
  carEntryDate: string,
  carExitDate: string,
  parkingCharge: number,
}



export interface IVehicleList extends IVehicle {
}
