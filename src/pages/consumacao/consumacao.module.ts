import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsumacaoPage } from './consumacao';
// import { MyApp } from 'app/app.component';


@NgModule({
  declarations: [
    ConsumacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsumacaoPage),
  ],
})
export class ConsumacaoPageModule {}
