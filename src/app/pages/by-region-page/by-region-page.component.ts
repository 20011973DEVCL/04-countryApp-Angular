import { Component, OnInit, inject } from '@angular/core';

import { Country } from 'src/app/interfaces/country.interface';
import { Region } from 'src/app/interfaces/region.type';
import { CountriesService } from 'src/app/services/countries.service';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{

  public countries: Country[] = [];
  public regions: Region[] = ['Africa' , 'Americas' , 'Asia' , 'Europe' , 'Oceania'];
  public selectedRegion?: Region;

  private countriesService = inject(CountriesService);

  ngOnInit(): void {
    const { countries, region }  = this.countriesService.cacheStore.byRegion;

    this.selectedRegion = (countries.length>0) ? region : '';
    this.countries = countries;
  }

  searchByRegion(region: Region): void {
    this.selectedRegion = region;

    this.countriesService.searchByRegion(region)
      .subscribe(countries => {
        this.countries = countries;
      })
  }
}
