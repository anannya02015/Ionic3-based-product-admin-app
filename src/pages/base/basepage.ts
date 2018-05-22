import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicModule, Platform,NavController} from 'ionic-angular';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TranslateService } from 'ng2-translate';
import { Globalization } from '@ionic-native/globalization';
import { defaultLanguage, availableLanguages, sysOptions,productnamelength,categorynamelengthmin,categorynamelengthmax} from './base.constants';
import { Storage } from '@ionic/storage';
import { __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK } from '../../providers/restapi-service/restapi-service';
import { CategoryDisplay } from '../catdisplay/catdisplay';

export class _halloRambo_ {
	languages = availableLanguages;
	selectedLanguage = sysOptions.systemLanguage;

	param = { value: 'world' };

    public translate: TranslateService;
    protected categories:any
    protected lan:any;
    protected currency:any="Rs";
    protected  storage:Storage
    protected globalization: Globalization
    protected  _plazoo_time:any = ''
    protected  _plazoo_untime:any = ''
protected maxId:any
protected tree: any
   protected  product:any= {name:'',prod_short_desc:'',prod_long_desc:'', prod_active: false, product_code_sku:'',brand:'', weight:'',update_date:'',create_date:'',prices:{price_original:'',price_revised:'',tax:''},stock:{total:'',alert:'',measurement_unit:'',availability_status:''},catid:'',prod_stat:{created_date:'',created_by:'',updated_date:'',updated_by:'',view_count:'',rating_count:'',sold_count:''},thumb:'',id:''};
    
   protected category:any= {  id: '', seller_active: false, parentId: '',value:'', desc:'',created_date:'',created_by:'',updated_date:'',updated_by:'',bcform:''};

	constructor(translate: TranslateService, storage:Storage,public __daakSalaKEANnotherCallKoruk______: __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK,public navCtrl: NavController) {
        this.translate = translate;

        this.storage=storage
        this.translate.setDefaultLang(defaultLanguage);
        

        if(this.storage){
            var language:any = this.storage.get('lan');//,this.maxId)
        
            console.log(" the language === in storage is =  "+language )     

            language.then(data => {                     
            console.log(" the language value stored in storage is =  "+data )     
            
            this.translate.use(data);

            this.lan = data
         });
        }else{
           // this.translate.setDefaultLang(defaultLanguage);
           if ((<any>window).cordova) {
            this.globalization.getPreferredLanguage().then(result => {
                var language = this.getSuitableLanguage(result.value);
                this.translate.use(language);
                sysOptions.systemLanguage = language;
            });
            } else {
                let browserLanguage = translate.getBrowserLang() || defaultLanguage;
                var language = this.getSuitableLanguage(browserLanguage);
                this.translate.use(language);
                sysOptions.systemLanguage = language;
            }
        }

        this.translate.use(this.lan);
    
        
        this.translate.get('save_success').subscribe((res: string) => {
          //return res;
          this._plazoo_time=res
      });
      this.translate.get('save_failure').subscribe((res: string) => {
        //return res;
        this._plazoo_untime=res
    });
        
	
	}

    
	applyLanguage() {
		this.translate.use(this.selectedLanguage);
	}
    getSuitableLanguage(language) {
		language = language.substring(0, 2).toLowerCase();
		return availableLanguages.some(x => x.code == language) ? language : defaultLanguage;
	}
    protected sabROKARNIYE___AAAAAAAYYYYYYY() {
        
        this.__GG_BOLY_saabPROKAAR_NIYEAAY______()
      
        this.__daakSalaKEANnotherCallKoruk______._GG_BAAL_saabPROKARniyeAAYGAACH___()
          .then(data => {      
            this.tree = data;     
          });
        
        
            
        }
    __GG_BOLY_saabPROKAAR_NIYEAAY______(){
        this.__daakSalaKEANnotherCallKoruk______._GG_BAAL_saabPROKARniyeAAY___()
        .then(data => {
      
        //  //console.log("All categories "+JSON.stringify(data));
          this.categories = JSON.stringify(data); 
          
           var catArray=data;//JSON.parse(this.categories)       
          // //console.log("this.maxId == " + this.maxId);   
      
           var max;
            for(var i in data) {  
                
              //console.log("this.data [i]['id'] : "+data[i]['id']);
          
             // //console.log("this record  : "+JSON.stringify(data[i]));
          
              if (!this.maxId || parseInt(data[i]['id']) > parseInt(this.maxId))
              this.maxId = data[i]['id'];
      
      
              this.storage.set("'"+data[i]['id']+"'",JSON.stringify(data[i]))
      
              //this.storage.set(data[i]['id'],data[i])
            }
            this.maxId= parseInt(this.maxId)+1
            this.storage.set('maxId',this.maxId)
            //console.log("  this.maxId   this.maxId   this.maxId =="+  this.maxId);
          });
      
    }
    protected _barri_CHOLEJA_() {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        
        //this.nav.push(AboutPage);
       // this.navCtrl.pop()
        this.navCtrl.push(CategoryDisplay);
        //this.menu.close();
      }
    

}
