import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  mytrue:true;
  constructor(private accountService:AccountService, private toastr:ToastrService){}
  canActivate(): Observable<boolean> {
  return this.accountService.currentUsers$.pipe( 
    map(user=> {
      if (!user) {
        this.toastr.error('you shall not pass')
        return false;
      } 
      return true;
    }) 
  )
  }
  
}
