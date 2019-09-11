import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ConfigService } from './../../common/services/config.service';
import { LoggerService } from './../../common/services/logger.service';
import { GiphyService } from './giphy.service';


describe('GiphyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [HttpClient, LoggerService, ConfigService, HttpHandler]
  }));

  it('should be created', () => {
    const service: GiphyService = TestBed.get(GiphyService);
    expect(service).toBeTruthy();
  });
});
