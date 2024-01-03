import { CountryService } from 'src/app/country-service/country.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../interface/country/country.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  countries? : Country[] = [];

  constructor(private countryService : CountryService) {

  }

  ngOnInit(): void {
    this.getCountries();
  }


  getCountries() {
    this.countryService.getCountries().subscribe(countries => this.countries = countries);
  }

}
