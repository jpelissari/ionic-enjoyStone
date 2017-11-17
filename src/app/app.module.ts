import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// Import HttpClientModule from @angular/common/http
import {HttpModule} from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TicketsPage } from '../pages/tickets/tickets';
import { EstacionamentosPage } from '../pages/estacionamentos/estacionamentos';
import { ConsumacaoPage } from '../pages/consumacao/consumacao';
import { LojasPage } from '../pages/lojas/lojas';
import { ComochegarPage } from '../pages/comochegar/comochegar';
import { ConteudoPage } from '../pages/conteudo/conteudo';
import { AreadosocioPage } from '../pages/areadosocio/areadosocio';
import { BuyPage } from '../pages/buy/buy';
import { OptionsPage } from '../pages/options/options';
import { Ingresso1Page } from '../pages/ingresso1/ingresso1';
import { FormCardPage } from '../pages/form-card/form-card';
import { Options2Page } from '../pages/options2/options2';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PaymentProvider } from '../providers/payment/payment';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TicketsPage,
    EstacionamentosPage,
    ConsumacaoPage,
    LojasPage,
    ComochegarPage,
    ConteudoPage,
    AreadosocioPage,
    BuyPage,
    OptionsPage,
    Ingresso1Page,
    FormCardPage,
    Options2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TicketsPage,
    EstacionamentosPage,
    ConsumacaoPage,
    LojasPage,
    ComochegarPage,
    ConteudoPage,
    AreadosocioPage,
    BuyPage,
    OptionsPage,
    Ingresso1Page,
    FormCardPage,
    Options2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PaymentProvider
  ]
})
export class AppModule {}
