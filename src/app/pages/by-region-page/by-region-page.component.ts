import { Component } from '@angular/core';
import { Country } from 'src/app/interfaces/country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  constructor(private countriesService: CountriesService) {}

  searchByRegion( term: string): void {
    this.countriesService.searchByRegion(term)
        .subscribe( countries => {
          this.countries = countries;
        })
  }
}
