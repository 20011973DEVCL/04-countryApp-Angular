import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CountriesRoutinModule } from './countries-routing.modules';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './country-table/country-table.component';



@NgModule({
  declarations: [
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutinModule,
    SharedModule
  ],
  exports:[
    CountryTableComponent
  ]
})
export class CountriesModule { }
