import { Component } from '@angular/core';
import { NavController, LoadingController,NavParams, AlertController,ToastController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { ImageCompressService, ResizeOptions, ImageUtilityService, IImage, SourceImage } from  'ng2-image-compress';
import { __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK } from '../../providers/restapi-service/restapi-service';

import { _halumhulum_ } from '../product/product';
import { timedelay} from '../base/base.constants';
import { TranslateService } from 'ng2-translate';
import { Storage } from '@ionic/storage';

@Component({
  
  templateUrl: '__ytuiCesdI__.html'
})

export class __ytuiCesdI__ {

  imageURI:any;
  imageFileName:any;
  ___domidoom__:any={prodid:'',colr:'',desc:'',_id:'',change_in_price:'',amount_pecnt:'',price_increase:''}

  //checkedValue:boolean=false
  defaultalreadyset:any

  
  showTitle: boolean = false;

  _damrusetDUMDUM__:boolean = false;

  
  //alreadyClicked:boolean=false;

  whenfileselected:boolean = false
  gomramukID:any
  dumdum:any
  _plazoo_time:any
  _plazoo_untime:any
  

  prod_short_desc:any
  prod_long_desc:any

  constructor(public nav: NavController,    
  //  private camera: Camera,
    private imgCompressService: ImageCompressService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public translate: TranslateService,
    public storage:Storage,
    public alertCtrl: AlertController,
    public daakBairer: __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK,
    public navParams: NavParams) {

    this.gomramukID = navParams.get('gomramukID');  
    this.dumdum = navParams.get('dumdum');  
      //this.storage.set("previousElementClick","faltu")

      this.translate.get('save_success').subscribe((res: string) => {
        //return res;
        this._plazoo_time=res
    });
    this.translate.get('save_failure').subscribe((res: string) => {
      //return res;
      this._plazoo_untime=res
  });
  
  this._popul___domidoom__(this.gomramukID);


  var dataPromise =this.storage.get("'"+this.dumdum+"'");
  var pro;
         dataPromise.then(data => {         
          
           var dataJson = JSON.parse(data)
          
           if(dataJson){
             console.log("data.value  = "+dataJson.value);
             pro=dataJson             
            
             this.prod_short_desc=pro.prod_short_desc
            this.prod_long_desc=pro.prod_long_desc
           
           }
           
       });

    }
    
   
 

  close(){
    //this.navCtrl.pop()
    
    this.nav.push(_halumhulum_, {
      mode: 'edit',
      dumdum: this.dumdum,
      prod_short_desc:this.prod_short_desc,
      prod_long_desc:this.prod_long_desc,
      segment:"color_page"
    });
  }

  

  
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  
  _rang__EEEEE(___domidoom__){
    


        this.daakBairer._rang__EEEEE_(___domidoom__).then((result) => {
         console.log(result);
        // loader.dismiss();
         this.presentToast(this._plazoo_time);
         //this.navCtrl.pop()
         
       
       }, (err) => {
         //loader.dismiss();
         this.presentToast(this._plazoo_untime+err);
     });
     
     
     setTimeout(() => { 
       this.nav.push(_halumhulum_, {
     mode: 'edit',
     dumdum: this.dumdum,
     prod_short_desc:this.prod_short_desc,
     prod_long_desc:this.prod_long_desc,
     segment:"color_size"     });}, timedelay); 
     
       }
       public _popul___domidoom__(dumdum){
        
          var dataPromise =this.storage.get("'"+this.gomramukID+"'");
      
             dataPromise.then(data => {         
              
               var dataJson = JSON.parse(data)
              
               if(dataJson){
                 console.log("_popul___domidoom__+++++ data.value  = "+dataJson.value);
                 this.___domidoom__=dataJson         
               }
               
           });
       
         }
     
      }

