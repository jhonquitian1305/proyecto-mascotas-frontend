import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service:AuthService, private router:Router){

  }
  canActivate():boolean{
   if( this.service.loggedIn()){
     return true;
   }
   this.router.navigate(['/signin']);
    return false;
  }

}
