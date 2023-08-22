import { Component } from '@angular/core';
import { Country } from 'src/app/interfaces/country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  constructor(private countriesService: CountriesService) {}

  searchByCapital( term: string): void {
    this.countriesService.searchByCapital(term)
        .subscribe( countries => {
          this.countries = countries;
        })
  }
}
