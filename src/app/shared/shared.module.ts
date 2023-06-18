import { NgModule } from "@angular/core";
import { EnumToArrayPipe } from "./pipes/enumToArray.pipe";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  exports: [EnumToArrayPipe],
  declarations: [EnumToArrayPipe]
})
export class SharedModule {}
