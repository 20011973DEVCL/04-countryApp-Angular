import { Component, OnInit, inject } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean= false;
  public initialTerm:string = '';

  private countriesService = inject(CountriesService);

  ngOnInit(): void {
    const { countries, term }  = this.countriesService.cacheStore.byCapital;

    this.countries = countries;
    this.initialTerm = (countries.length>0) ? term : '';
  }

  searchByCapital( term: string): void {

    this.isLoading = true;

    this.countriesService.searchByCapital(term)
        .subscribe( countries => {
          this.countries = countries;
          this.isLoading = false;
        })
  }
}
