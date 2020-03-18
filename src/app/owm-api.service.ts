import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OwmApiService {

  API_KEY = '1680ccda07a9a97d3729b2bfd64f3b6e';

  constructor(private httpClient: HttpClient) { }

  public getDataByTownName(name: string) {
    return this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${this.API_KEY}&units=metric`);
  }
}
