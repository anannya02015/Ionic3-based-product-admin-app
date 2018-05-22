import { Component,ViewChild } from '@angular/core';
import { Platform,Nav,MenuController,NavParams,NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { CategoryPage } from '../pages/category/category';
//import { AppTree } from '../pages/tree/tree';
import { ProductlistPage } from '../pages/productlist/productlist';
import { TreeModel,NodeEvent,RenamableNode} from 'ng2-tree';
import { __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK } from '../providers/restapi-service/restapi-service';
import { TreeModule } from 'angular-tree-component';
import { CategoryDisplay } from '../pages/catdisplay/catdisplay';
//import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { TranslateService } from 'ng2-translate';
import { BasePage } from '../pages/base/base.page';
import { _halloRambo_ } from '../pages/base/basepage';

import { homepage } from '../pages/base/base.constants';

import { Storage } from '@ionic/storage';
import { _halumhulum_ } from '../pages/product/product';
@Component({
  selector:'tree_view',
  templateUrl: 'app.html'
})


export class MyApp  {
  data: any;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;
  // rootPage: any = ProductlistPage;
  rootPage:any = CategoryDisplay;

  //rootPage:any = HomePage;

 // maxId:any
  
  homepage=HomePage;
   
//public tree: any 


@ViewChild('treeComponent') treeComponent;
	
public menu;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    menu: MenuController,public __daakSalaKEANnotherCallKoruk______: __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK,public translate: TranslateService,public storage:Storage) {

    //super(translate,storage,__daakSalaKEANnotherCallKoruk______,navCtrl)
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.menu=menu
    
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'About', component: AboutPage },
      { title: 'Product', component: ProductlistPage }
      //{ title: 'Tree', component: AppTree }
    ];

    this.storage.set('lan','en')		

    
  }
  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  
  }

  

  public tree: any
  public categories:any
public singlecategoryrecord:any
maxId:any



  openCatPage(pagename,nodeId){

    if(pagename=="main"){
      this.nav.push(CategoryPage, {
        frompage: 0,   
        maxId:this.maxId     
      });
    }
    if(pagename=="subcat"){
      this.nav.push(CategoryPage, {
        frompage: nodeId,  
        maxId:this.maxId          
      });
    }
    this.menu.close();
  }

  openLanguageSelectionPage(){
    this.nav.setRoot(BasePage);
    this.menu.close();
  }

  openHomePae() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    
    //this.nav.push(AboutPage);
    this.nav.setRoot(AboutPage);
    this.menu.close();
  }

  	// 3 - print caught event to the console
	public logEvent(e: NodeEvent): void {
    console.log('EVENT LOG'+e);
    
    console.log('===='+e.node.id);


    if(e.node.id !=0){
      this.nav.push(CategoryPage, {
        catid: e.node.id,   
       // storage:this.storage,
        mode:'edit',
        maxId:this.maxId    
      });
    }
    this.menu.close();

  }
  
 

  public handleCollapsed(e: NodeEvent): void {
    console.log('EVENT LOG'+e);
    
    console.log('===='+e.node.id);
  }

   
last_id:any

oopNodeController:any;// = this.treeComponent.getControllerByNodeId(this.last_id);
  public handleExpanded(e: NodeEvent): void {
    console.log('EVENT LOG'+e);


if(this.last_id){   
this.oopNodeController = this.treeComponent.getControllerByNodeId(this.last_id);
//this.oopNodeController.collapse();
  }

  

this.last_id = e.node.id

//this.oopNodeController = this.treeComponent.getControllerByNodeId(this.last_id);

//this.oopNodeController.select();
    console.log('===='+e.node.id);
  }


  
  
}
