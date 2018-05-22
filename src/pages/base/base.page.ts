import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicModule, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TranslateService } from 'ng2-translate';
import { Globalization } from '@ionic-native/globalization';
import { defaultLanguage, availableLanguages, sysOptions } from './base.constants';
import {NavController, NavParams} from 'ionic-angular';
import { CategoryDisplay } from '../catdisplay/catdisplay';
@Component({
	templateUrl: 'base.html'
})

export class BasePage {
	languages = availableLanguages;
	selectedLanguage = sysOptions.systemLanguage;

	param = { value: 'world' };

	private translate: TranslateService;

	constructor(public nav: NavController,translate: TranslateService,private storage: Storage) {
		this.translate = translate;

		if(this.storage){
			var language:any = this.storage.get('lan');//,this.maxId)
			
			console.log(" the language === in storage is =  "+language )     
	
			language.then(data => {                     
				console.log(" the language value stored in storage is =  "+data )     
				
				this.translate.use(data);
				this.selectedLanguage  = data
			 });
			}
	
	}

	applyLanguage() {
		this.translate.use(this.selectedLanguage);
		this.storage.set('lan',this.selectedLanguage)		
	}

	goback() {
		this.nav.push(CategoryDisplay)
	}

	


	
}
