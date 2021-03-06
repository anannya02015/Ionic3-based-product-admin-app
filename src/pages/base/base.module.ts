import { NgModule } from '@angular/core';
import { IonicModule, Platform } from 'ionic-angular';
import { BasePage } from './base.page';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TranslateService } from 'ng2-translate';
import { Globalization } from '@ionic-native/globalization';
import { defaultLanguage, availableLanguages, sysOptions } from './base.constants';

@NgModule({
	imports: [IonicModule, TranslateModule],
	declarations: [BasePage],
	entryComponents: [BasePage]
})

export class BaseModule {
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
