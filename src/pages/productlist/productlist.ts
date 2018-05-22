import { Component,Pipe,PipeTransform} from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import {ProductdetailpagePage} from '../productdetailpage/productdetailpage';
import {ProductlistProvider} from '../../providers/productlist-service/productlistservice';

import { _halumhulum_ } from '../product/product';
import { __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK } from '../../providers/restapi-service/restapi-service';

import { TranslateService } from 'ng2-translate';
import { _halloRambo_ } from '../base/basepage';
import { Storage } from '@ionic/storage';

@Component({

  templateUrl: 'productlist.html',
})

export class ProductlistPage   extends _halloRambo_ {

  productlist:any=[{}]
  selectedItem:any
  properties:any
  parentId:Number
  catid:any

  category:any;

  constructor(public navCtrl: NavController,public translate: TranslateService,public storage:Storage, public navParams: NavParams,public propertyService :ProductlistProvider,public __daakSalaKEANnotherCallKoruk______: __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK,protected alertCtrl: AlertController) {
    super(translate,storage,__daakSalaKEANnotherCallKoruk______,navCtrl)

    this.selectedItem = navParams.get('item');

  this.parentId = navParams.get('Id');
  this.catid = navParams.get('catid');

  

  if(this.catid!=undefined || this.catid!=""){
   
    
    var dataPromise =this.storage.get("'"+this.catid+"'");
    
           dataPromise.then(data => {         
            
             var dataJson = JSON.parse(data)
            
             //console.log("data.value  = "+dataJson.value);
             this.category=dataJson         
             
         });
  }
  console.log("this.catid "+this.catid);


  this.__daakSalaKEANnotherCallKoruk______.getProductsOfcategory(this.catid).then((result) => {
    
    //if(result != undefined && result!=null)
//{ 
  var resultJsonObj = JSON.stringify(result);
  this.productlist=JSON.parse(resultJsonObj)
    
  for(var i in this.productlist) {  
    
  //console.log("this.data [i]['id'] : "+this.productlist[i]['_id']);

  console.log(" image URL of  : "+i+" "+ this.productlist[i]['thumb'] );

 

  this.storage.set("'"+this.productlist[i]['_id']+"'",JSON.stringify(this.productlist[i]))

  //this.storage.set(data[i]['id'],data[i])
}
  console.log("product list for category "+ this.catid+" is "+this.productlist);

 // }
 // this.productlist=[{  name:'laddu',prod_short_desc:'dsdss',prod_long_desc:'sds', prices:{price_original:'',price_revised:'',tax:''},stock:{total:'11',alert:'11',measurement_unit:'pcs',availability_status:''}} ]
}, (err) => {
    console.log(err);
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductlistPage');
  }

 // static get parameters() {
   // return [[NavController], [NavParams], [ProductlistProvider]];
//}

addProduct() {
  
  this.navCtrl.push(_halumhulum_, {catid: this.catid});
}


itemTapped(event, productid) {
  

  var dataPromise =this.storage.get("'"+productid+"'");
  var pro;
         dataPromise.then(data => {         
          
           var dataJson = JSON.parse(data)
          
           if(dataJson){
             console.log("data.value  = "+dataJson.value);
             pro=dataJson             
             this.navCtrl.push(_halumhulum_, {
              mode: 'edit',
              dumdum:productid,
              prod_short_desc:pro.prod_short_desc,
              prod_long_desc:pro.prod_long_desc,
              catid:this.catid
            });
           
           }
           
       });
  console.log(' product.id '+productid);

   
}

}
@Pipe({ name: 'keys',  pure: false })
export class KeysPipe implements PipeTransform {
    transform(value: any, p:number,fields:string): any[] {
      // check if "routes" exists
      if(value) {
        // create instance vars to store keys and final output
        let keyArr: any[] = Object.keys(value),        
            dataArr = [];

        for(var i in keyArr) {          
          let keyName = keyArr[i]
          let fieldArray=fields.split(',')
      //    console.log("argument value "+fields)
       //   console.log("fieldArray = "+JSON.stringify(fieldArray))
          if(fieldArray.indexOf(keyName) == -1 ){
            continue
          }
          var keyValue=value[keyArr[i]]
           var jsonRec={}
           jsonRec[keyName]=keyValue
          dataArr.push(jsonRec);
        }

        /*
        keyArr.forEach((key: any) => {
         // console.log("====key======="+key)
          //var keyName = key
         
          //var jsonRec={"price_revised":value[key]}          
//            dataArr.push(jsonRec);

            let keyName = key
          
            var keyValue=value[key]
             var jsonRec={}
             jsonRec[keyName]=keyValue
            dataArr.push(jsonRec);

            

        });
        */
     //   console.log("dataArr = "+JSON.stringify(dataArr))
        


        // return the resulting array

       // console.log("====dataArr======="+JSON.stringify(dataArr))
        return dataArr;
      }
    }
}
