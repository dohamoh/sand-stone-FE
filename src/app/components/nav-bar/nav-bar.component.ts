import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery'
import { GetTranslationService } from '../../services/get-translation.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  ngOnInit(): void {
    $(document).click(function (event) {
      var clickover = $(event.target);
      var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
      if (_opened === true && !clickover.hasClass("navbar-toggler") && !clickover.hasClass("form-control")) {
          $("button.navbar-toggler").click();
      }
  });

  }
  constructor(public translate:TranslateService , private GetTranslate: GetTranslationService) {
    translate.setDefaultLang('en');
    translate.use('en')
  }
  switchLang(lang: string) {
    this.translate.use(lang);
    // this.translate.currentLang = lang
    this.GetTranslate.getLang(lang)
    // this.getTranslate.getTranslation('')
  }
}
