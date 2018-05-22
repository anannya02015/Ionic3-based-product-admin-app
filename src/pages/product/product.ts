import {Component,ViewChild,ElementRef} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';

import { FormGroup,FormControl,FormArray,} from '@angular/forms';
import { __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK } from '../../providers/restapi-service/restapi-service';

import {NavController, NavParams,AlertController,ModalController,ToastController} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CategoryDisplay } from '../catdisplay/catdisplay';

import { __ytuiPesdI__ } from '../productimage/__ytuiPesdI__';
import { __ytuiCesdI__ } from '../productcolor/__ytuiCesdI__';


import { TranslateService } from 'ng2-translate';
import { _halloRambo_ } from '../base/basepage';

//import {_halumhulum_} from '../product/product';
import { defaultLanguage, availableLanguages, sysOptions,productnamelength,productshortdesclength,productnamelengthmin,productnamelengthmax,productlongdesclength,timedelay} from '../base/base.constants';
import { ProductlistPage } from '../productlist/productlist';
import { homepage } from '../base/base.constants';

@Component({
  
  templateUrl: 'product.html'
})
export class _halumhulum_ extends _halloRambo_ {
  
  //@ViewChild('myComponent') myComponent;
  @ViewChild('myComponent') myComponent: ElementRef;
  loading:any;
  products:any;
  totalProducts:{};
  _droomyL_:{}
  category:any;
  productForm:FormGroup
  submitAttempt: boolean = false;
  shoSaveNextButton: boolean = true;
  disableOthersegmentbutton: boolean = true;
  defaultalreadyset:boolean=false
  desc:String
  __domidooms__:any;
  dumdum:any
  mode:String
  __domidoomsBanano__:any=[]
  
  short_desc_val:any
  
  
  prod_short_desc_item: FormControl;
  prod_long_desc_item: FormControl;
  item: FormControl;


  segment: string = "basic_info"; 
  
  prod_active:boolean=true
  
  
  catid:any
  
  productidmaxrecord:any=[{_id: null, maxid: 0}]

  productnamelengthmax:any=productnamelengthmax
  productnamelengthmin:any=productnamelengthmin

  _colFm: FormGroup;
  items: any
  

  constructor(public nav: NavController, public daakBairer: __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK,public toastCtrl: ToastController,public form:FormBuilder,public navParams: NavParams,public translate: TranslateService,public storage:Storage,public alertCtrl: AlertController,public modalCtrl: ModalController) {
    
    super(translate,storage,daakBairer,nav)
    this.productForm = this.form.group({
      //email: ["",Validators.compose([Validators.required, validateEmail])],
      name:[this.product.name,Validators.compose([Validators.minLength(productnamelengthmin),Validators.maxLength(productnamelengthmax), Validators.pattern('[a-zA-Z0-9 .]+'), Validators.required])],
      prod_active:[''],
    //  prod_short_desc:[''],//,Validators.compose([Validators.maxLength(productshortdesclength), Validators.pattern('[a-zA-Z1-9. ]*'),Validators.pattern(".*\\S.*")])],
    //  prod_long_desc:[''],//Validators.compose([Validators.maxLength(productlongdesclength), Validators.pattern('[a-zA-Z1-9. ]*'),Validators.pattern(".*\\S.*")])]
      price_original:[''],
      price_revised:[''],
      total_stock:[''],
      alert_stock:[''],     
      items: this.form.array([ this._ccccccCOl____() ])

      
  });
  
  //var i1 = this.productForm.controls['items']


  //i1.value[0].colr=
  
  //i1.value[0].change_in_price.setValue("IncreasePercent")

  //i1.value[0].price_increase="100"



  /*

  this._colFm = this.form.group({
    colr: '',
    change_in_price: '',
    price_increase: '',
    items: this.form.array([ this._ccccccCOl____() ])
  });
  */
  if(this.product.prod_active){
    
        this.prod_active = this.product.prod_active
      }else{
        this.product.prod_active = true
       
      }


  //this.parentId = navParams.get('parentId');
  
  this.catid = navParams.get('catid');

  
  if(this.catid==undefined || this.catid==""){
    let dataPromise  =this.storage.get("catid")
    //var defaultalreadyset
    dataPromise.then(data => {   
       var dataValue = JSON.stringify(data  )
       this.catid = dataValue ;
    });

  }else{
    this.storage.set("catid",this.catid)
    var dataPromise =this.storage.get("'"+this.catid+"'");
    
           dataPromise.then(data => {         
            
             var dataJson = JSON.parse(data)
            
             //console.log("data.value  = "+dataJson.value);
             this.category=dataJson         
             
         });
  }
  

  console.log('this.catid: '+this.catid)


//  this.prod_short_desc = this.form.control('');
//  this.prod_long_desc = this.form.control('');

  

  
  //this.prod_short_desc.setValue("HELLO SHORT ")
  //this.prod_long_desc.setValue("HELLO LONG LONG ")

  
  this.mode = navParams.get('mode');  

  this.segment=navParams.get('segment')


  var prod_short_desc = navParams.get('prod_short_desc')
  var prod_long_desc = navParams.get('prod_long_desc')

  if(this.segment==undefined || this.segment==""){
    this.segment="basic_info"
  }
  
  
  //COMMENT THIS SOON 
  //this.mode = "edit"


  //this.storage = navParams.get('storage');
  console.log('this.mode: '+this.mode)


  this.prod_short_desc_item = this.form.control('');
  this.prod_long_desc_item = this.form.control('');


  
  if(this.mode=="edit"){
    this.dumdum = navParams.get('dumdum');
    this.product._id = this.dumdum
    //this.prod_short_desc_item.setValue("HAHAHAHAHA"+this.short_desc_val)
    //this.prod_short_desc_item.setValue(this.product.prod_long_desc)
    //COMMENT THE FOLLOWING THREE LINES AFTER TEST 
    //  this.dumdum = "5a0061f9b883bd21bc507a5b"
    //  this.product._id = this.dumdum
      
   //   this.segment="color_size"
    //  this.segment="image"


    console.log('this.dumdum: '+this.dumdum)
    this.shoSaveNextButton=true;

    this.getValueFromStorage(this.dumdum);
    //this.showAddSubProductButton=true
    this._digdoomdoom_(this.dumdum)
    this.disableOthersegmentbutton=false

    this._damadoom_(this.dumdum)


    console.log("****** INSIDE ionViewWillLoad this.product.prod_short_desc **"+this.short_desc_val)
    

    //this.getValueFromStorage(this.dumdum);

    //setTimeout(() => {     console.log(" tomato")     }, 3000); 

   this.prod_short_desc_item.setValue(prod_short_desc)
   this.prod_long_desc_item.setValue(prod_long_desc)


  //var i1 = this.productForm.controls['items']
 

  //i1.value[0].colr=
  
  //i1.value[0].change_in_price.setValue("IncreasePercent")

  //i1.value[0].price_increase="100"



  /*

  this._colFm = this.form.group({
    colr: '',
    change_in_price: '',
    price_increase: '',
    items: this.form.array([ this._ccccccCOl____() ])
  });
  */  //var i1 = this.productForm.controls['items']


  //i1.value[0].colr=
  
  //i1.value[0].change_in_price.setValue("IncreasePercent")

  //i1.value[0].price_increase="100"



  /*

  this._colFm = this.form.group({
    colr: '',
    change_in_price: '',
    price_increase: '',
    items: this.form.array([ this._ccccccCOl____() ])
  });
  */

   }else{
    this.product.catid=this.catid
   
   }
   
   
   
    }
    

/*
    ionViewDidLoad() {


    
    this.prod_short_desc_item = this.form.control('');

    this.prod_long_desc_item = this.form.control('');

    this.getValueFromStorage(this.dumdum);

    setTimeout(() => {     console.log(" tomato")     }, 3000); 

    console.log("****** INSIDE ionViewDidEnter this.product.prod_short_desc **"+this.short_desc_val)

   this.prod_short_desc_item.setValue("this.short_desc_val")
   
    
      //  this.prod_long_desc_item.setValue("ITEM 222 <b> hello how you </b>")
  }
  */
/*
  ionViewDidEnter(){
    console.log("****** INSIDE ionViewWillEnter this.product.prod_short_desc **"+this.short_desc_val)
    this.prod_short_desc_item = this.form.control('');

    this.prod_long_desc_item = this.form.control('');

    this.getValueFromStorage(this.dumdum);


  //  this.myComponent.

    this.prod_short_desc_item.setValue(this.short_desc_val)

    const val = this.myComponent.nativeElement as HTMLDivElement;
    
    val.innerHTML = val.innerHTML+" hello mastan "
    
    
     //   this.prod_long_desc_item.setValue("ITEM 222 <b> hello how you </b>")
  }
  */
  close(){
   //this.nav.pop()
  // console.log("Opening Product");

  let dataPromise  =this.storage.get("catid")
  //var defaultalreadyset
  dataPromise.then(data => {   
    // var dataValue = JSON.stringify(data  )
     this.catid = data ;
  });

   this.nav.setRoot(ProductlistPage, {catid: JSON.parse(this.catid)});

  
  }

itemTapped(_drom_ID) {
  
  //const profileModal = this.modalCtrl.create(__ytuiPesdI__,
    //{ _drom_ID: _drom_ID ,mode: 'edit'});
 //profileModal.present();
}

_doly666_(_drom_ID,defalt) {

  if(defalt){
    let msg:any = ''
    this.translate.get('can_not_delete_image').subscribe((res: string) => {
      //return res;
      msg=res
  });
    
    const alert = this.alertCtrl.create({
      title: 'Warning',
      subTitle: msg,
      buttons: ['Dismiss']
    });
    alert.present();
    return
  }

  console.log("_drom_ID == "+_drom_ID);  
let data={id:_drom_ID}
  this.daakBairer._doly666_A(data).then((result) => {
    console.log(result);  


  }, (err) => {
    console.log(err);
    
  });



  setTimeout(() => { 
    this.nav.push(_halumhulum_, {
mode: 'edit',
dumdum: this.dumdum,
segment:"image"     });}, timedelay); 

}


public _damadoom_(dumdum){
  
        console.log("inside __domidooms__")
        this.daakBairer.___domidooms__(dumdum).then((result) => {
       
        //var resultJsonObj = JSON.stringify(result);
        this.__domidooms__=result;//JSON.parse(resultJsonObj)
       
        for(var i in this.__domidooms__){


          this.storage.set("'"+this.__domidooms__[i]._id+"'",JSON.stringify(this.__domidooms__[i]))

            let ytuehhfhff={prodid:'',colr:'',desc:'',_id:'',change_in_price:'',amount_pecnt:'',price_increase:''}

            ytuehhfhff.prodid=this.__domidooms__[i].prodid
            ytuehhfhff.colr=this.__domidooms__[i].colr
            ytuehhfhff.amount_pecnt=this.__domidooms__[i].amount_pecnt
            ytuehhfhff.change_in_price=this.__domidooms__[i].change_in_price
            ytuehhfhff.price_increase=this.__domidooms__[i].price_increase
            ytuehhfhff._id=this.__domidooms__[i]._id
            

            let value1;

            if(this.__domidooms__[i].change_in_price != "default"){

              var arr = [];
              arr.push(this.__domidooms__[i].change_in_price.toUpperCase());
              arr.push(" by ")

              arr.push(this.__domidooms__[i].price_increase + this.__domidooms__[i].amount_pecnt=="percent"?'%':'')

              ytuehhfhff.desc=this.__domidooms__[i].change_in_price.concat(
              " by ").concat(this.__domidooms__[i].price_increase).concat(this.__domidooms__[i].amount_pecnt=="percent"?' %':" "+this.currency)
            
            }else{
              ytuehhfhff.desc="Default"
           }
            
           if(ytuehhfhff.prodid !='')
            this.__domidoomsBanano__.push(ytuehhfhff);

            
          }
          console.log("this.__domidoomsBanano__ == "+JSON.stringify(this.__domidoomsBanano__))
    
          }, (err) => {
            console.log(err);
          });
          
  
      }
  
    public _digdoomdoom_(dumdum){

      console.log("inside _digdoomdoom__digdoomdoom__digdoomdoom_")
      this.daakBairer._droomyLget_(dumdum).then((result) => {
     
      var resultJsonObj = JSON.stringify(result);
      this._droomyL_=JSON.parse(resultJsonObj)
     
      for(var i in this._droomyL_){
        if(this._droomyL_[i].default == true){
        //  this.storage.set('defaultalreadyset',true)
          
         // console.log("defaultalreadyset set to true")
         this.defaultalreadyset = true
          break;
        }else{
         // this.storage.set('defaultalreadyset',false)
        //  console.log("defaultalreadyset set to false")
        }
      }
      console.log("this._droomyL_ == "+this._droomyL_)

      }, (err) => {
        console.log(err);
      });
      

    }
    public getValueFromStorage(dumdum){
     
       var dataPromise =this.storage.get("'"+this.dumdum+"'");
   
          dataPromise.then(data => {         
           
            var dataJson = JSON.parse(data)
           
            if(dataJson){
              console.log("data.value  = "+dataJson.value);
              this.product=dataJson 
             
   this.prod_short_desc_item.setValue(this.product.prod_short_desc)
   this.prod_long_desc_item.setValue(this.product.prod_long_desc)


              
            }
            
        });
    
      }
  
  openProduct(product) {
     console.log("Opening Product");
    // this.nav.push(_halumhulum_, {product: product});
  }

  __trepoi___(dumdum){

//    console.log('defaultalreadyset =='+this.storage.get//('defaultalreadyset'))
/*let dataPromise  =this.storage.get('defaultalreadyset')
//var defaultalreadyset
dataPromise.then(data => {   
   var dataValue = JSON.stringify(data  )
   this.defaultalreadyset = dataValue ;//data
});
*/


console.log(" defaultalreadyset "+this.defaultalreadyset)

    const profileModal = this.modalCtrl.create(__ytuiPesdI__,
       { dumdum: dumdum ,mode: 'edit',defaultalreadyset:this.defaultalreadyset});

  //  this.nav.push(__ytuiPesdI__,
    //     { dumdum: dumdum ,mode: 'edit',defaultalreadyset:this.defaultalreadyset})
    profileModal.present();
  }

  whatisThisAlert(message) {
    const alert = this.alertCtrl.create({
      title: '',
      subTitle: message,
      buttons: ['Dismiss']
    });
    alert.present();
  }
  

  
 _tywssssSooitybP__(from:any) {
 

        if(!this.productForm.valid){
          this.submitAttempt = true;
        return;
        }

        

      console.log("this.mode =============================="+this.mode);
      if(this.mode=="edit"){

              console.log("the data being sent _id ====="+this.product._id)
              console.log("the data being sent id ====="+this.product.id)
              console.log("the data being sent  parentId====="+this.product.parentId)
              console.log("the data being sent value ====="+this.product.value)
              console.log("the data being sent desc ====="+this.product.desc)
              
              console.log("this.Product being saved == "+this.product)
              
              this.product.prod_short_desc = this.prod_short_desc_item.value
              this.product.prod_long_desc = this.prod_long_desc_item.value

              //reset the product value n storage with the latest product record for the given product id
              this.storage.set("'"+this.product._id+"'",JSON.stringify(this.product))

              this.daakBairer.editProduct(this.product).then((result) => {
                console.log(result);
              
              }, (err) => {
                console.log(err);
              });
             


      //location.reload
      //location.reload(true)
      }else{
            
            
              console.log("the data being sent to server is =====")  
              console.log("this.Product being saved == "+JSON.stringify(this.product))


              this.product.prod_short_desc = this.prod_short_desc_item.value
              this.product.prod_long_desc = this.prod_long_desc_item.value

              this.product.dyna_field1  = "sourav"
              

              this.daakBairer.saveProduct(this.product).then((result) => {
                console.log(result);
                this.shoSaveNextButton=true
                this.disableOthersegmentbutton=false
                
                                
                this.product._id = result

                //console.log("the  product after added  ====="+JSON.stringify(this.product))
                console.log("the  product _id after the product is added frst time ====="+JSON.stringify(this.product._id))

              }, (err) => {
                console.log(err);
                this.submitAttempt = true;
              });
            
              //      this.nav.push
        //this.nav.goToRoot
        //location.reload
}

if(from == undefined||from==null){
  setTimeout(() => {     this.nav.setRoot(ProductlistPage,{catid: this.catid });     }, timedelay); 
  }else if(from == 'savenext'){
    if(this.segment=="basic_info"){
      this.segment = "image"
    }
  }

//  this.navCtrl.pop();

this.productForm.reset;
//this.navCtrl.push(HomePage);
  
}

saveAndGONext(){

  this._tywssssSooitybP__('savenext')
  //this.segment="image"

}

searchProducts(searchbar) {
    console.log(searchbar.value);
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
/*
  ionViewWillLoad() {
    this.prod_short_desc = this.form.control('');
    this.prod_long_desc = this.form.control('');
  }
  */

  __aayyytrdsahdC___(): void {
    this.items = this.productForm.get('items') as FormArray;
    this.items.push(this._ccccccCOl____());
  }
  _ccccccCOl____(): FormGroup {

    return this.form.group({
      colr: '',
      change_in_price: 'default',
      price_increase: '',
      amount_pecnt:'default'
    });
  }

  
  _colouiuSSSSS(){
  
    this.items = this.productForm.controls["items"]

    let itututt_poyus:any=[{}]
    
    var i1 = this.productForm.controls['items']
    for(var i in i1.value){
   // for (var item of this.productForm.get('items'))
   let ytuehhfhff={prodid:'',colr:'',change_in_price:'',amount_pecnt:'',price_increase:''}
   
   
  
   ytuehhfhff.prodid=this.product._id
   ytuehhfhff.colr=i1.value[i].colr
   ytuehhfhff.change_in_price=i1.value[i].change_in_price
   ytuehhfhff.amount_pecnt=i1.value[i].amount_pecnt
   ytuehhfhff.price_increase=i1.value[i].price_increase
   
      itututt_poyus.push(ytuehhfhff);

      //console.log(i1.value[i].colr)
   
   //console.log(i1.value[i].change_in_price)

   //console.log(i1.value[i].amount_pecnt)

   //console.log(i1.value[i].price_increase)


   }

   console.log(itututt_poyus)
   this.daakBairer.__crtyvvvvvvvvvv_(itututt_poyus).then((result) => {
    console.log(result);
   // loader.dismiss();
    this.presentToast("Successful");
    //this.navCtrl.pop()
    
  
  }, (err) => {
    //loader.dismiss();
    this.presentToast("Failed due to err "+err);
});


setTimeout(() => { 
  this.nav.push(_halumhulum_, {
mode: 'edit',
dumdum: this.dumdum,
segment:"color_size"     });}, timedelay); 

  }

    
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 6000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  

  onSelectChange(e,gomramukID){
    if(e=="edit"){
      console.log(" INSIDE EDIT LOGIC")
      const profileModal = this.modalCtrl.create(__ytuiCesdI__,
        { dumdum:this.dumdum,gomramukID: gomramukID});
     profileModal.present();

    }else if(e=="delete"){
      let data={gomramukID:gomramukID}
      this.daakBairer._doly777_A(data).then((result) => {
        console.log(result);  
    
        
        
    
      }, (err) => {
        console.log(err);
        this.presentToast(this._plazoo_untime+err);
      });
      setTimeout(() => { 
        this.nav.push(_halumhulum_, {
      mode: 'edit',
      dumdum: this.dumdum,
      segment:"color_size"     });}, timedelay); 
  }
  }

  

}

