import {Component,ViewChild} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';

import { FormGroup,FormControl } from '@angular/forms';
import { __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK } from '../../providers/restapi-service/restapi-service';

import {NavController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TreeModel,NodeEvent,RenamableNode} from 'ng2-tree';


import {CategoryPage} from '../category/category';
import { TranslateService } from 'ng2-translate';
import { _halloRambo_ } from '../base/basepage';

import { HomePage } from '../home/home';
import { AlertController,ModalController} from 'ionic-angular';
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize',
  pure: true
})

@Component({
  
  templateUrl: 'catdisplay.html'
})
export class CategoryDisplay extends _halloRambo_{
  @ViewChild('treeComponent') treeComponent;
  loading:any;

  item: FormControl;


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
  //maxId:any

  tab1Root = CategoryPage;
  tab2Root = HomePage;
  //tab3Root = Page3;

  showAddSubcategoryButton:boolean=false
  category:any= {  id: '', seller_active: false, parentId: '',value:'', desc:'',update_date:'',create_date:''};

  categoryParent:any= {  id: '', seller_active: false, value:'', desc:'',update_date:'',create_date:''};

  constructor(private domSanitizer: DomSanitizer,public nav: NavController, public __daakSalaKEANnotherCallKoruk______: __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK,public form:FormBuilder,public navParams: NavParams,public translate: TranslateService,public storage:Storage,private formBuilder: FormBuilder,) {
    
        super(translate,storage,__daakSalaKEANnotherCallKoruk______,nav)
        translate.setDefaultLang('en');
    this.sabROKARNIYE___AAAAAAAYYYYYYY()
    //document.getElementById("encoded").innerHTML = 
    

 
  }
  public getValueFromStorage(catid,mode){
    if(catid && mode=="edit"){
     var dataPromise =this.storage.get(this.catid);
 
        dataPromise.then(data => {         
         
          var dataJson = JSON.parse(data)
         
          //console.log("data.value = "+dataJson.value);
          this.category=dataJson         
          
      });
    }
    }
  
  openProduct(product) {
     //console.log("Opening Product");
    // this.nav.push(_halumhulum_, {product: product});
  }
  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  
  }

 //// ionViewDidLoad(){
  //  this.fetchcat();
 // }

  
  
public singlecategoryrecord:any



  openCatPage(pagename,nodeId){

    var maxIDFromStorage:any = this.storage.get('maxId');//,this.maxId)
  
    maxIDFromStorage.then(data => {         
      
      //this.maxId= data+1
      
      //console.log("this.maxId during main caterogy open page =  "+this.maxId)   
       
   });

   
   
  

    if(pagename=="main"){
            this.nav.goToRoot
      this.nav.push(CategoryPage, {
        frompage: 0,   
        maxId:parseInt(this.maxId)     
      });

      

    }
    if(pagename=="subcat"){
     // this.nav.pop()
      this.nav.push(CategoryPage, {
        frompage: nodeId,  
        maxId:parseInt(this.maxId)        
      });
    }
    
  }



  	// 3 - print caught event to the console
	public logEvent(e: NodeEvent): void {
    //console.log('EVENT LOG'+e);
    
    //console.log('===='+e.node.id);
    //console.log('===='+e.node.id);


    if(e.node.id !=0){
      this.nav.push(CategoryPage, {
        catid: e.node.id,   
        storage:this.storage,
        mode:'edit',
        maxId:this.maxId    
      });
    }
    //this.menu.close();

  }
  
 

  public handleCollapsed(e: NodeEvent): void {
    //console.log('EVENT LOG'+e);
    
    //console.log('===='+e.node.id);
  }

   
last_id:any

oopNodeController:any;// = this.treeComponent.getControllerByNodeId(this.last_id);
  public handleExpanded(e: NodeEvent): void {
    //console.log('EVENT LOG'+e);


if(this.last_id){   
this.oopNodeController = this.treeComponent.getControllerByNodeId(this.last_id);
//this.oopNodeController.collapse();
  }

  

this.last_id = e.node.id

//this.oopNodeController = this.treeComponent.getControllerByNodeId(this.last_id);

//this.oopNodeController.select();
    //console.log('===='+e.node.id);
  }

 
 


  ionViewWillLoad() {
    this.item = this.formBuilder.control('');
  }

}
