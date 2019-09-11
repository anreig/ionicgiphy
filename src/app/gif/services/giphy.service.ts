import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { createRequestOption } from 'src/app/common/services/request.util';
import { ConfigService } from '../../common/services/config.service';
import { LoggerService } from '../../common/services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  API_URL: string;
  API_COUNT_URL: string;

  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private logger: LoggerService
  ) {
    this.API_URL = this.config.getEnv().API_URL;
    this.API_COUNT_URL = this.config.getEnv().API_COUNT_URL;
  }

  search(query: string): Observable<Gif[]> {
    return this.http.get<any>(this.API_URL + 'search?' + 'q=' + query + '&api_key=' + this.config.getEnv().API_KEY + '&limit=10').pipe(map(items => items.data),
      catchError((e, _) => {
        this.logger.error('Error searching Gifs', e)
        return []
      })
    );
  }

  trending(req?: any): Observable<Gif[]> {
    const options = createRequestOption(req);
    return this.http.get<any>(this.API_URL + 'trending?' + 'api_key=' + this.config.getEnv().API_KEY, { params: options }).pipe(map(items => items.data),
      catchError((e, _) => {
        this.logger.error('Error searching Gifs', e)
        return []
      })
    );
  }

  getGif(id: number) {
    return this.http.get<any>(this.API_URL + id + '?api_key=' + this.config.getEnv().API_KEY);
  }

}
