import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from 'src/app/country-service/country.service';
import { Country } from 'src/app/interface/country/country.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


/*
The parent CountryRootComponent used to set the CountryDetailComponent.country property and the CountryDetailComponent displayed the hero.

CountryRootComponent doesn't do that anymore. Now the router creates the CountryDetailComponent in response to a URL such as ~/detail/12.

The CountryDetailComponent needs a new way to get the hero to display. This section explains the following:

Get the route that created it
Extract the id from the route
Get the hero with that id from the server using the HeroService*/

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  // @Input() country?: Country;
  country? : Country;

  ngOnInit(): void {
      this.getCountry();
  }

  /*
  The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. This component is interested in the route's parameters extracted from the URL. The "id" parameter is the id of the hero to display.

The HeroService gets hero data from the remote server and this component uses it to get the hero-to-display.

The location is an Angular service for interacting with the browser. This service lets you navigate back to the previous view. */

  constructor(private route: ActivatedRoute, private countryService: CountryService, private location: Location) {

  }

  getCountry() : void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.countryService.getCountry(id).subscribe(country => this.country = country);
  }

  goBack() : void {
    this.location.back();
  }
}
