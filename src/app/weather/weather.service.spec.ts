import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { MaterialModule } from '../material.module';
import { NoopAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ HttpClientTestingModule , MaterialModule, NoopAnimationsModule],
      providers: [WeatherService]
    });
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));
});
