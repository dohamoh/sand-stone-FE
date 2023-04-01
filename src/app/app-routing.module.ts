import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { OurHightlightsComponent } from './components/our-hightlights/our-hightlights.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { OurPartnersComponent } from './components/our-partners/our-partners.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'whyUs',component:WhyUsComponent},
  {path:'ourHighlights',component:OurHightlightsComponent},
  {path:'ourWork',component:OurWorkComponent},
  {path:'ourClients',component:OurClientsComponent},
  {path:'services',component:OurServiceComponent},
  {path:'ourPartners',component:OurPartnersComponent},
  {path:'contactUs',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
