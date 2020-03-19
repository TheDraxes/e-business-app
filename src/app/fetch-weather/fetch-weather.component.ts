import { Component, OnInit, Input } from '@angular/core';
import { OwmApiService } from '../owm-api.service';

@Component({
  selector: 'app-fetch-weather',
  templateUrl: './fetch-weather.component.html',
  styleUrls: ['./fetch-weather.component.css']
})
export class FetchWeatherComponent implements OnInit {

  data: any;
  iconUrl: string;

  @Input() set name(value: string) {
    if (value) {
      this.getWeatherByTownName(value);
    }
  }

  constructor(private owmApiService: OwmApiService) { }

  ngOnInit(): void {

  }

  getWeatherByTownName(name: string) {
    this.owmApiService.getDataByTownName(name).subscribe(
      data => { this.data = data; },
      err  => {},
      ()   => { this.iconUrl = this.extractIconUrl(); console.log(this.data); }
    );
  }

  extractIconUrl() {
    const iconID  = this.data.weather[0].icon;
    return `http://openweathermap.org/img/wn/${iconID}@2x.png`;
  }

  convertTimestamp(timeStamp: any) {
    const today = new Date(timeStamp * 1000);
    return '' + today.getHours() + ':' + today.getMinutes();
  }

}
