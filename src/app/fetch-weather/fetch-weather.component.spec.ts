import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchWeatherComponent } from './fetch-weather.component';

describe('FetchWeatherComponent', () => {
  let component: FetchWeatherComponent;
  let fixture: ComponentFixture<FetchWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
