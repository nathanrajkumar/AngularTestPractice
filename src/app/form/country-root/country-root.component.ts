import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/country-service/country.service';
import { MessageService } from 'src/app/message-service/message.service';

import { Country } from 'src/app/interface/country/country.component';

@Component({
  selector: 'app-country-root',
  templateUrl: './country-root.component.html',
  styleUrls: ['./country-root.component.css'],
})
export class CountryRoot implements OnInit {

  // selectedCountry?: Country;
  constructor(private countryService: CountryService, private messageService : MessageService) {
  }
  countries? : Country[];

  ngOnInit() {
    this.getCountries();
  }

  // onSelect(country: Country) {
  //   this.selectedCountry = country;
  //   this.messageService.add(`Country Root Component: Selected Country id=${country.id}`)
  // }

  getCountries() : void {
    this.countryService.getCountries().subscribe(countries => this.countries = countries);
  }

}
