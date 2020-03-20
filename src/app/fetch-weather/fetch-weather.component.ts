import { Component, OnInit, Input } from '@angular/core';
import { OwmApiService } from '../owm-api.service';
import { Forecast } from './forecast';

@Component({
  selector: 'app-fetch-weather',
  templateUrl: './fetch-weather.component.html',
  styleUrls: ['./fetch-weather.component.css']
})
export class FetchWeatherComponent implements OnInit {

  currentData: any;
  forecastData: any;
  extractedForecastData: Forecast[] = [];
  iconUrl: string;

  @Input() set name(value: string) {
    if (value) {
      this.extractedForecastData = [];
      this.getWeatherByTownName(value);
      this.getForecastDataByTownName(value);
    }
  }

  constructor(private owmApiService: OwmApiService) { }

  ngOnInit(): void {

  }

  getForecastDataByTownName(name: string) {
    this.owmApiService.getForecastDataByTownName(name).subscribe(
      data => { this.forecastData = data; },
      err  => {},
      ()   => {
        console.log(this.forecastData);
        this.extractImpData();
      }
    );
  }

  getWeatherByTownName(name: string) {
    this.owmApiService.getDataByTownName(name).subscribe(
      data => { this.currentData = data; },
      err  => {},
      ()   => {
        console.log(this.currentData);
      }
    );
  }

  extractIconUrl(iconID: string) {
    return `http://openweathermap.org/img/wn/${iconID}@2x.png`;
  }

  extractImpData() {
    let count = 0;

    this.forecastData.list.forEach(forecast => {
      /* console.log(new Date(forecast.dt_txt).toLocaleDateString()); */
      console.log(forecast.main.feels_like);

      const nf = new Forecast(
        forecast.main.temp,
        forecast.main.feels_like,
        forecast.weather[0].description,
        forecast.weather[0].icon,
        new Date(forecast.dt_txt),
        );

      if (nf.day.getHours() === 12) {
        this.extractedForecastData.push(nf);
      }
      count++;

    });
  }

  convertTimestamp(timeStamp: any) {
    const today = new Date(timeStamp * 1000);
    return '' + today.getHours() + ':' + today.getMinutes();
  }

}
