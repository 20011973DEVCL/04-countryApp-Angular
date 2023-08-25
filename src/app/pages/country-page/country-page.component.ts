import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from 'src/app/interfaces/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activtedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.activtedRoute.params
      // .subscribe( params => {
      //   console.log({params: params['id']});
      // });

      // Destructuracion
      // .subscribe( ({ id }) => {
      //   // console.log( {params: id});
      //   this.countriesService.searchCountryByAlphaCode(id)
      //     .subscribe( country => {
      //       console.log(country);
      //     })
      // })
      .pipe(
        switchMap( ({ id }) =>  this.countriesService.searchCountryByAlphaCode( id ))
      )
      .subscribe( country => {

        if (!country) return this.router.navigateByUrl('');
        return this.country = country;
      })
  }
}
