import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstacionamentosPage } from './estacionamentos';
// import { MyApp } from 'app/app.component';

@NgModule({
  declarations: [
    EstacionamentosPage,
  ],
  imports: [
    IonicPageModule.forChild(EstacionamentosPage),
  ],
})
export class EstacionamentosPageModule {}
