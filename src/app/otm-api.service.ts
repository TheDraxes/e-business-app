import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OtmApiService {

  API_KEY = '5ae2e3f221c38a28845f05b656046e02259b8b384390ddaa9151b458';

  constructor(private httpClient: HttpClient) { }

  public getData(method: string, params: string) {
    return this.httpClient.get(`https://api.opentripmap.com/0.1/en/places/` + method + params + `&apikey=${this.API_KEY}`);
  }

  public getDetails(method: string, params: string) {
    return this.httpClient.get(`https://api.opentripmap.com/0.1/en/places/` + method + params + `?apikey=${this.API_KEY}`);
  }
}
