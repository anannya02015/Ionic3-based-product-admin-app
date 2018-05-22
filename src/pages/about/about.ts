import { Component } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';

import { FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK } from '../../providers/restapi-service/restapi-service';

import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import {Constant} from '../setting/constants';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  //tab1Root = HomePage;
  //tab2Root = AboutPage;
  //tab3Root = ContactPage;
  loginForm:FormGroup
  submitAttempt: boolean = false;
  user = { name: '', seller_active: '', seller_reg_due_date: '', seller_picture: '', seller_email: '', 
  address: { addr1: '', addr2: '', city: '', zipcode: '', geo: { lat: '', lng: '' } },registration_date:'', update_date:'',create_date:''};



  constructor(public navCtrl: NavController, public restapiService: __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK,public form:FormBuilder) {
    this.loginForm = form.group({
      //email: ["",Validators.compose([Validators.required, validateEmail])],
      name:["",Validators.required]
  });
  }

  saveUser(userData?) {
    this.submitAttempt = true;

    if(!this.loginForm.valid){
     return;
  }

  if(!userData) {
    userData = this.loginForm.value;
  } 


    console.log("the data being sent to server is =====")
    console.log(this.user)
    this.restapiService.saveUser(userData).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  //  this.navCtrl.pop();

  this.loginForm.reset;
  this.navCtrl.push(HomePage);
    
  }

}
