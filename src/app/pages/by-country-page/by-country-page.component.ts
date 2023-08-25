import { Component, OnInit, inject } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public initialTerm: string = '';

  private countriesService = inject(CountriesService);

  ngOnInit(): void {
    const { countries, term }  = this.countriesService.cacheStore.byCountries;

    this.countries = countries;
    this.initialTerm = (countries.length>0) ? term : '';
  }

  searchByCountry( term: string): void {
    this.countriesService.searchByCountry(term)
        .subscribe( countries => {
          this.countries = countries;
        })
  }
}
