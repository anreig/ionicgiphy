import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable()
export class HttpRequestInterceptorService implements HttpInterceptor {

  constructor() {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const updatedRequest = request.clone({
      headers: request.headers
        .set('api_key', '7MCKuTbHYGvSeAT2MNoEV3XhFnGHzCF8')
    });


    return next.handle(updatedRequest);

  }
}
