import { Component, OnInit, Input } from '@angular/core';
import { OtmApiService } from '../otm-api.service';

@Component({
  selector: 'app-open-trip-map',
  templateUrl: './open-trip-map.component.html',
  styleUrls: ['./open-trip-map.component.css']
})
export class OpenTripMapComponent implements OnInit {

  geodata: any;
  objectList: any;

  @Input() set name(value: string) {
    if (value) {
      this.getGeodata(value);
    }
  }

  constructor(private otmApiService: OtmApiService) { }

  ngOnInit(): void {
  }

  getGeodata(name: string) {
    const method = 'geoname';
    const params: string = '?name=' + name;

    this.otmApiService.getData(method, params).subscribe(
      geodata => { this.geodata = geodata; },
      err  => {},
      ()   => {
        this.getRadius();
        console.log(this.geodata);
      }
    );
  }

  getRadius() {
    const radius = '1000';

    const method = 'radius';
    const params: string = '?radius=' + radius + '&lon=' + this.geodata.lon + '&lat=' + this.geodata.lat + "&rate=3";

    this.otmApiService.getData(method, params).subscribe(
      objectList => { this.objectList = objectList; },
      err  => {},
      ()   => {
        // Filtern der Liste nach Bewertungen
        this.objectList.features = this.objectList.features.sort((a, b) => {
          return b.properties.rate - a.properties.rate;
        });
        this.getAllDetails()
      }
    );
  }

  getAllDetails() {
    this.getDetails(this.objectList.features[5]);
  }

  // Methode, mit welcher zu einem bestimmten Ort die Details abgerufen werden
  getDetails(object: any) {
    const method = 'xid/';

    this.otmApiService.getDetails(method, object.properties.xid).subscribe(
      details => { object.details = details; },
      err  => {},
      ()   => {
      }
    );
  }
}
