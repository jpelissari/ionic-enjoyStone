import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LojasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 import { Ingresso1Page } from '../ingresso1/ingresso1';

@IonicPage()
@Component({
  selector: 'page-lojas',
  templateUrl: 'lojas.html',
})
export class LojasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goIngresso() {
  this.navCtrl.push(Ingresso1Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LojasPage');
  }

}
