import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketsPage } from './tickets';
// import { MyApp } from 'app/app.component';

@NgModule({
  declarations: [
    TicketsPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketsPage),
  ],
})
export class TicketsPageModule {}
