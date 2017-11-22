import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { AreadosocioPage } from '../areadosocio/areadosocio';

/**
 * Generated class for the ConsumacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consumacao',
  templateUrl: 'consumacao.html',
})
export class ConsumacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

goCarrinho() {
  this.navCtrl.push(AreadosocioPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsumacaoPage');
  }

}
