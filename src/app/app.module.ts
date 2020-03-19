import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchWeatherComponent } from './fetch-weather/fetch-weather.component';
import { OpenTripMapComponent } from './open-trip-map/open-trip-map.component';

@NgModule({
  declarations: [
    AppComponent,
    FetchWeatherComponent,
    OpenTripMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
