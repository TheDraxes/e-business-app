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
  details: any;

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
    const params: string = '?radius=' + radius + '&lon=' + this.geodata.lon + '&lat=' + this.geodata.lat;

    this.otmApiService.getData(method, params).subscribe(
      objectList => { this.objectList = objectList; },
      err  => {},
      ()   => {
        this.getDetails(this.objectList.features[2].properties.xid);
        console.log(this.objectList);
      }
    );
  }

  getDetails(xid: string) {
    const method = 'xid/';

    this.otmApiService.getDetails(method, xid).subscribe(
      details => { this.details = details; },
      err  => {},
      ()   => {
        console.log(this.details);
      }
    );
  }
}
