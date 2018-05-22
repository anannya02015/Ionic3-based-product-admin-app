import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductdetailpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-productdetailpage',
  templateUrl: 'productdetailpage.html',
})
export class ProductdetailpagePage {

  property:String
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.property = navParams.get('property');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductdetailpagePage');
  }

}
