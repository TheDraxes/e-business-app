import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTripMapComponent } from './open-trip-map.component';

describe('OpenTripMapComponent', () => {
  let component: OpenTripMapComponent;
  let fixture: ComponentFixture<OpenTripMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenTripMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenTripMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
