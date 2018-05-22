import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK } from '../../providers/restapi-service/restapi-service';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {Constant} from '../setting/constants';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;
  //tab1Root = HomePage;
  //tab2Root = AboutPage;
  //tab3Root = ContactPage;

  constructor(public navCtrl: NavController, public restapiService: __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK) {
    this.getUsers();
  }

  getUsers() {
    this.restapiService.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  ionViewDidLoad(){
    this.getUsers();
  }
  
}
