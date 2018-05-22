import { NgModule, ErrorHandler,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp,Platform, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FileChooser } from '@ionic-native/file-chooser';

import { IonicPageModule } from 'ionic-angular';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CategoryPage } from '../pages/category/category';
import { CategoryDisplay } from '../pages/catdisplay/catdisplay';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK } from '../providers/restapi-service/restapi-service';
import { HttpModule } from '@angular/http';
import { ProductlistPage,KeysPipe } from '../pages/productlist/productlist';

import { _halumhulum_ } from '../pages/product/product';


import { ProductdetailpagePage } from '../pages/productdetailpage/productdetailpage';

import {ProductlistProvider} from '../providers/productlist-service/productlistservice';
import { TreeModule } from 'ng2-tree';
//import { AppTree } from '../pages/tree/tree';

import { NodeEvent, TreeModel, RenamableNode, Ng2TreeSettings } from 'ng2-tree';
//import { BaseModule } from '../pages/base/base.module';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TranslateLoader, TranslateStaticLoader } from 'ng2-translate/src/translate.service';
import { Http } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { __ytuiPesdI__ } from '../pages/productimage/__ytuiPesdI__';

import { __ytuiCesdI__ } from '../pages/productcolor/__ytuiCesdI__';


import { BasePage } from '../pages/base/base.page';
import { RichTextComponent } from '../components/rich-text/rich-text';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';

import {NavController, AlertController,ModalController} from 'ionic-angular';

//import { BasePage } from './base.page';
//import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TranslateService } from 'ng2-translate';
import { Globalization } from '@ionic-native/globalization';
import { defaultLanguage, availableLanguages, sysOptions } from '../pages/base/base.constants';
import { ImageCompressService,ResizeOptions,ImageUtilityService } from 'ng2-image-compress';


export function createTranslateLoader(http: Http) {
	return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    BasePage,
   // AppTree,
    TabsPage,
    CategoryPage,
    CategoryDisplay,
    ProductlistPage,
    RichTextComponent,
    ProductdetailpagePage,
    KeysPipe,
    _halumhulum_,
    __ytuiPesdI__,
    __ytuiCesdI__
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,   
    TreeModule,     
    IonicModule.forRoot(MyApp),
    TranslateModule,
    IonicStorageModule.forRoot(),
    IonicPageModule.forChild(RichTextComponent),
    TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (createTranslateLoader),
			deps: [Http]
    })
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    CategoryPage,
    HomePage,
    TabsPage,
    BasePage,
   // AppTree,
    ProductlistPage,
    CategoryDisplay,
    ProductdetailpagePage,
    _halumhulum_,
    __ytuiPesdI__,
    __ytuiCesdI__
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    RichTextComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK,
    ProductlistProvider,
    FileTransfer,
    FileTransferObject,
    
    ImageCompressService,ResizeOptions,
    File,
    Globalization,
    Camera,
    
    FileChooser
  ]
})
export class AppModule {

  constructor(platform: Platform, translate: TranslateService,private globalization: Globalization) {
		
		platform.ready().then(() => {
				// this language will be used as a fallback when a translation isn't found in the current language
				translate.setDefaultLang(defaultLanguage);

				if ((<any>window).cordova) {
					globalization.getPreferredLanguage().then(result => {
						var language = this.getSuitableLanguage(result.value);
						translate.use(language);
						sysOptions.systemLanguage = language;
					});
				} else {
					let browserLanguage = translate.getBrowserLang() || defaultLanguage;
					var language = this.getSuitableLanguage(browserLanguage);
					translate.use(language);
					sysOptions.systemLanguage = language;
				}
			}
    );
  }
    getSuitableLanguage(language) {
      language = language.substring(0, 2).toLowerCase();
      return availableLanguages.some(x => x.code == language) ? language : defaultLanguage;
    }
}
