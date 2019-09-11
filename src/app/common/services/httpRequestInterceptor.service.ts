import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';



@Injectable()
export class HttpRequestInterceptorService implements HttpInterceptor {

  constructor(private config: ConfigService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const updatedRequest = request.clone({
      // headers: request.headers.set('api_key', this.config.getEnv().API_KEY),
      // setHeaders: {
      //   api_key: this.config.getEnv().API_KEY
      // }
      // body: { api_key: this.config.getEnv().API_KEY }
    });


    return next.handle(updatedRequest);

  }
}
