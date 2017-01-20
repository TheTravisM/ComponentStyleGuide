import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerRoutingModule } from './datepicker-routing.module';
import { DatepickerComponent } from './datepicker.component';

@NgModule({
  imports: [
    CommonModule,
    DatepickerRoutingModule
  ],
  declarations: [DatepickerComponent]
})
export class DatepickerModule { }
