import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GetTranslationService } from './services/get-translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sand-stone-code';
  constructor(public translate:TranslateService , private GetTranslate:GetTranslationService) {
    translate.addLangs(['en' , 'ar']);
    translate.setDefaultLang('en');
    translate.use('en')
  }
  switchLang(lang: string) {
    this.translate.use(lang);
    // this.GetTranslate.getLang(lang)
  }
}
