import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyPage } from '../buy/buy';

/**
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
})
export class TicketsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Buy() {
  this.navCtrl.push(BuyPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
  }

}
