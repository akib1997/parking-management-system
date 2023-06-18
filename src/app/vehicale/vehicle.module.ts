import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SharedModule } from "../shared/shared.module";
import { NzRadioModule } from 'ng-zorro-antd/radio';

@NgModule({
    declarations: [VehicleListComponent, VehicleFormComponent],
    imports: [
        CommonModule,
        VehicleRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NzFormModule,
        NzInputModule,
        NzTableModule,
        NzDividerModule,
        NzButtonModule,
        NzDatePickerModule,
        NzSelectModule,
        SharedModule,
        NzRadioModule
    ]
})
export class VehicleModule { }
