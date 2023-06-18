import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {

  constructor(private router: Router, private location: Location) {}

  toBVehicle(): void {
    this.router.navigate(['/vehicle']);
  }

  toDashboard(): void {
    this.router.navigate(['']);
  }

  goBack(): void {
    this.location.back();
  }
}
