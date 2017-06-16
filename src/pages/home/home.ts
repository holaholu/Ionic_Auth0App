import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthService} from '../../providers/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  profile: Object;
  constructor(private auth: AuthService, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    if(this.auth.authenticated()){
      this.profile = JSON.parse(localStorage.getItem('profile'));
    }
  }

}
