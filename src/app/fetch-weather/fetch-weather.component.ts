import { Component, OnInit, Input } from '@angular/core';
import { OwmApiService } from '../owm-api.service';

@Component({
  selector: 'app-fetch-weather',
  templateUrl: './fetch-weather.component.html',
  styleUrls: ['./fetch-weather.component.css']
})
export class FetchWeatherComponent implements OnInit {

  data: any;

  @Input() set name(value: string) {
    this.getWeatherByTownName(value);
    console.log(this.data);
  }

  constructor(private owmApiService: OwmApiService) { }

  ngOnInit(): void {

  }

  getWeatherByTownName(name: string) {
    this.owmApiService.getDataByTownName(name).subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }

}
