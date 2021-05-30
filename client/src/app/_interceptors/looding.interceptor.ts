import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BussyService } from '../_services/bussy.service';
import { delay, finalize } from 'rxjs/operators';

@Injectable()
export class LoodingInterceptor implements HttpInterceptor {

  constructor(private bussyService:BussyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.bussyService.bussy();
    return next.handle(request).pipe(
      finalize(()=>{
        this.bussyService.idle();
      })
    )
  }
}
