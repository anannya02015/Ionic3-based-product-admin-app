import {Component} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';

import { FormGroup } from '@angular/forms';
import { __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK } from '../../providers/restapi-service/restapi-service';

import {NavController, NavParams,IonicPage} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CategoryDisplay } from '../catdisplay/catdisplay';

//import {_halumhulum_} from '../product/product';

import * as time_date from 'moment';

import { ProductlistPage } from '../productlist/productlist';
import { defaultLanguage, availableLanguages, sysOptions,productnamelength,categorynamelengthmin,categorynamelengthmax} from '../base/base.constants';
import { _halloRambo_ } from '../base/basepage';
import { TranslateService } from 'ng2-translate';
@Component({
  
  templateUrl: 'catsubcat.html'
})
export class CategoryPage  extends _halloRambo_ {
  
  loading:any;
  products:any;
  totalProducts:{};

  catsubForm:FormGroup
  submitAttempt: boolean = false;
  seller_active:boolean=false
  desc:String
  parentId:Number
  catid:any
  mode:String
  frompage:any
  maxId:any
  seller_active_flag:boolean=true
  showAddSubcategoryButton:boolean=false
  categorynamelengthmin:any=categorynamelengthmin
  categorynamelengthmax:any=categorynamelengthmax
  


  get value():String{
    return  this.category.value.toUpperCase()
    // !== undefined ?  `$${this.AnnualRevenue.toLocaleString()}`: '$0';
  }

  // strip out all the currency information and apply to Annual Revenue
  set value(val: String) {
    //const revenueVal = val.replace(/[^\d]/g, '');
    //this.AnnualRevenue = parseInt(revenueVal);
    this.category.value=val.toUpperCase()
  }


  categoryParent:any= {  id: '', seller_active: false, value:'', desc:'',created_date:'',created_by:'',updated_date:'',updated_by:''};

  constructor(public nav: NavController,public translate: TranslateService, public __daakSalaKEANnotherCallKoruk______: __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK,public form:FormBuilder,public navParams: NavParams,public storage: Storage) {
    super(translate,storage,__daakSalaKEANnotherCallKoruk______,nav)
    this.catsubForm = form.group({
      //email: ["",Validators.compose([Validators.required, validateEmail])],
      name:[this.category.value,Validators.compose([Validators.minLength(categorynamelengthmin),Validators.maxLength(categorynamelengthmax), Validators.pattern('[a-zA-Z0-9 .]+'), Validators.required])],
      seller_active:[this.category.seller?this.category.seller:this.seller_active_flag],
      desc:[this.category.desc]
  });
  this.parentId = navParams.get('parentId');
  this.frompage = navParams.get('frompage');
  this.catid = navParams.get('catid');
  this.mode = navParams.get('mode');

  this.maxId    = navParams.get('maxId');
  //this.storage = navParams.get('storage');
  //console.log('this.parentId: '+this.parentId)
  //console.log('this.frompage: '+this.frompage)
  //console.log('this.catid: '+this.catid)
  //console.log('this.mode: '+this.mode)
  //console.log('this.maxId: '+this.maxId)
 
  if(this.category.seller_active){

    this.seller_active_flag = this.category.seller_active
  }else{
    this.category.seller_active = true
   
  }
    

  this.category.created_date=time_date('26/04/2016', 'DD/MM/YYYY').format('YYYY-MM-DD');
  this.category.updated_date=time_date().format('YYYY-MM-DD');
  
  //console.log("this.category.created_date=============================="+this.category.created_date);
  
  //console.log("this.category.updated_date=============================="+this.category.updated_date);
  

 

//   var dataPromise =this.storage.get(this.catid);
 
 if(this.mode=="edit"){
  this.showAddSubcategoryButton=true
 }else{
  this.showAddSubcategoryButton=false
 }
  this.__gothamthekeJinisAAN_______(this.catid,this.mode);
 
 
  }
  public __gothamthekeJinisAAN_______(catid,mode){
    if(catid && mode=="edit"){
     var dataPromise =this.storage.get("'"+this.catid+"'");
 
        dataPromise.then(data => {         
         
          var dataJson = JSON.parse(data)
         
          //console.log("data.value  = "+dataJson.value);
          this.category=dataJson         
          
      });
    }
    }
    onChange(value) {
      this.category.value = value.toUpperCase();
     }
  openProduct(catid) {
     //console.log("Opening Product");
     this.nav.push(ProductlistPage, {catid: catid});
  }
  
 public addsubcategory(parentid){
  
  //this.maxId= parseInt(this.maxId)+1

  //console.log(" this.maxId inside addsubcategory ====="+this.maxId);
    this.nav.push(CategoryPage, {
      parentId: parentid,        
      maxId:this.maxId
    });
  
}

savecategory() {
 
  

  if(!this.catsubForm.valid){
    this.submitAttempt = true;
   return;
  }

  //console.log("this.maxId before save =========="+this.maxId);

  if(!this.maxId){
    this.maxId=1
  }
   if(this.maxId && Number.isNaN(parseInt(this.maxId))){
    this.maxId = 1
  }
  //console.log("this.maxId after value assignment========="+this.maxId);

 //if(this.maxId)
 // this.storage.set('maxId',this.maxId)

//console.log("this.mode =============================="+this.mode);

if(this.category && this.category.value){
  this.category.value = this.category.value.toUpperCase()
}
this.category.created_date=time_date('26/04/2016', 'DD/MM/YYYY').format('YYYY-MM-DD');
this.category.updated_date=time_date().format('YYYY-MM-DD');

//console.log("this.category.created_date=============================="+this.category.created_date);

//console.log("this.category.updated_date=============================="+this.category.updated_date);


if(this.mode=="edit"){

  //console.log("the data being sent _id ====="+this.category._id)
  //console.log("the data being sent id ====="+this.category.id)
  //console.log("the data being sent  parentId====="+this.category.parentId)
  //console.log("the data being sent value ====="+this.category.value)
  //console.log("the data being sent desc ====="+this.category.desc)
  
  //console.log("this.category being saved == "+this.category)

  //moment('26/04/2016', 'DD/MM/YYYY').format('YYYY-MM-DD');

  
  this.__daakSalaKEANnotherCallKoruk______.editCategory(this.category).then((result) => {
    //console.log(result);
   
  }, (err) => {
    //console.log(err);
  });
  setTimeout(() => {     this.nav.push(CategoryDisplay);     }, 1000); 


 //location.reload
 //location.reload(true)
}else{

 // if(Number.isNaN(parseInt(this.maxId))){
   // this.maxId =1
 // }

  if(this.parentId ){
    this.category.parentId=this.parentId.toString()   
    this.category.id=this.maxId
  }else {    
    this.maxId= parseInt(this.maxId)
    this.category.id=this.maxId
    delete this.category.parentId
  }

  //console.log("the data being sent to server is =====")  
  //console.log("this.category being saved == "+this.category)

  this.__daakSalaKEANnotherCallKoruk______.saveCategory(this.category).then((result) => {
    //console.log(result);
    
  }, (err) => {
    //console.log(err);
    this.submitAttempt = true;
  });
  setTimeout(() => {     this.nav.push(CategoryDisplay);     }, 1000); 
  
  //this.nav.goToRoot
  //location.reload
}
function getMax(arr, prop) {
  var max;
  for (var i=0 ; i<arr.length ; i++) {
      if (!max || parseInt(arr[i][prop]) > parseInt(max[prop]))
          max = arr[i];
  }
  return max;
}

//  this.navCtrl.pop();

this.catsubForm.reset;
//this.navCtrl.push(HomePage);
  
}

ionViewDidLoad(){
  this.__gothamthekeJinisAAN_______(this.catid,this.mode);

  ////console.log("this.category retrieved from the storage = "+JSON.stringify(this.category));     
  
}

  searchProducts(searchbar) {
    //console.log(searchbar.value);
    this.products = this.totalProducts;
    let searchValue = searchbar.value;
    if(searchValue.trim() == "") {
      return;
    }
    this.products =  this.products.filter((product) => {
      if(product.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
        return true;
      }
      return false;
    });
    
  }
}
