import { Injectable } from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  lock = new Auth0Lock('J2ii9C4J1mMVUkHuDcrjUpK2pfOGpiXi', 'techguyweb.auth0.com', {});

  constructor() {
    this.lock.on('authenticated', (authResult:any) => {
      this.lock.getProfile(authResult.idToken, function(error:any, profile:any){
        if(error){
          throw new Error(error);
        }
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
      });
    });
  }

  public login(){
    this.lock.show();
  }

  public authenticated(){
    return tokenNotExpired();
  }

  public logout(){
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

}
