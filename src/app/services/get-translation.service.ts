import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class GetTranslationService {
  currentLang2:any;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    
  }
  getLang(lang:any) {

    console.log(lang);
  }
  getTranslation(str: any) {
    let currentLang = this.translate.currentLang; // get current language
    // let currentLang = this.currentLang2;
    console.log(currentLang);
    const returnValue = this.translate.translations[currentLang][str]; // get converted string from current language
    if (returnValue === undefined) {
      return this.translate.translations.en[str]; // if value is getting undefined then return default language string, en_merch is default english language file here
    } else {
      return returnValue;
    }
  }
}
