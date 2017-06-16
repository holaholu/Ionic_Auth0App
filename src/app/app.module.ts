import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { HomePage } from '../pages/home/home';
import {AuthService} from '../providers/auth';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {Http} from '@angular/http';

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => localStorage.getItem('id_token'))
  }), http);
}

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    HomePage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    AuthService,
    {
      provide:AuthHttp,
      useFactory:getAuthHttp,
      deps: [Http]
    }
  ]
})
export class AppModule {}
