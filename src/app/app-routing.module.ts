import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FetchWeatherComponent } from './fetch-weather/fetch-weather.component';


const routes: Routes = [
  {path: '', component: FetchWeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
