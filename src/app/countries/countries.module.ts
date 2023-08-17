import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CountriesRoutinModule } from './countries-routing.modules';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CountriesRoutinModule,
    SharedModule
  ]
})
export class CountriesModule { }
