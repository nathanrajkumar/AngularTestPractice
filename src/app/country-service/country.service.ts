import { Injectable } from '@angular/core';
import { COUNTRIES } from '../constants/constants';
import { Country } from '../interface/country/country.component';
import { Observable, of } from 'rxjs'
import { MessageService } from '../message-service/message.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private messageService : MessageService) { }

  getCountries() : Observable<Country[]> {
    const countries = of(COUNTRIES);  // emits single value, an array of mock countries
    this.messageService.add("Country Service: fetched Countries")
    return countries;
  }

  getCountry(id : Number) {
    const country = COUNTRIES.find(country => country.id === id)!;
    this.messageService.add(`Country Service: fetched Country id=${id}`);
    return of(country);
  }
}
