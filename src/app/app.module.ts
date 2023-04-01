import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OurHightlightsComponent } from './components/our-hightlights/our-hightlights.component';
import { OurPartnersComponent } from './components/our-partners/our-partners.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { SliderHolderComponent } from './components/slider-holder/slider-holder.component';
import { UpBtnComponent } from './components/up-btn/up-btn.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    HomeComponent,
    NavBarComponent,
    OurHightlightsComponent,
    OurPartnersComponent,
    OurWorkComponent,
    OurServiceComponent,
    SliderHolderComponent,
    UpBtnComponent,
    WhyUsComponent,
    OurClientsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      defaultLanguage: 'en'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
