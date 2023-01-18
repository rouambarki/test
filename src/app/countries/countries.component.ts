import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { CountriesService } from '../service/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  constructor(private countriesService: CountriesService) {}
  listCountries: any = [];
  tempCountries: any = [];
  index: number = 6;
  lang: any;

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    this.countriesService.getAllCountries().subscribe((data) => {
      this.listCountries = data;
      this.tempCountries = data.slice(0, this.index);
    });
  }
  getCountriesByLang() {
    this.countriesService.getCountriesByLang(this.lang).subscribe((data) => {
      this.listCountries = data;
      this.tempCountries = data.slice(0, this.index);
      console.log(data);
    });
    console.log(this.lang);
  }
  showMore() {
    this.index = this.index + 6;
    this.tempCountries = this.listCountries.slice(0, this.index);
  }
}
