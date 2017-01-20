import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiRoutingModule } from './ui-routing.module';

// import { AccordionModule } from './accordion/accordion.module';

import { UiComponent } from './ui.component';
import { AccordionModule } from './accordion/accordion.module';

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule,
    AccordionModule


  ],
  declarations: [
    UiComponent
    ]
})
export class UiModule { }
