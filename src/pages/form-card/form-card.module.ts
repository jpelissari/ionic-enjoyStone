import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormCardPage } from './form-card';

@NgModule({
  declarations: [
    FormCardPage,
  ],
  imports: [
    IonicPageModule.forChild(FormCardPage),
  ],
})
export class FormCardPageModule {}
