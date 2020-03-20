export class Forecast {
  temp: string;
  feelsLike: string;
  description: string;
  icon: string;

  day: Date;

  constructor(temp: string, feelsLike: string, desc: string, icon: string, date) {
    this.temp = temp;
    this.feelsLike = feelsLike;
    this.description = desc;
    this.icon = icon;

    this.day = date;
  }
}
