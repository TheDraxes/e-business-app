import { Component, OnInit } from '@angular/core';
import { OwmApiService } from '../owm-api.service';

@Component({
  selector: 'app-fetch-weather',
  templateUrl: './fetch-weather.component.html',
  styleUrls: ['./fetch-weather.component.css']
})
export class FetchWeatherComponent implements OnInit {

  data;
  name;

  constructor(private owmApiService: OwmApiService) { }

  ngOnInit(): void {

  }

  getWeatherByTownName() {
    this.owmApiService.getDataByTownName(this.name).subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }

}
