import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OptionsPage } from '../options/options';
import { Options2Page } from '../options2/options2';

// import 'rxjs/add/operator/map';
//
// import { PaymentProvider } from './../../providers/payment/payment';
//
//
//
@IonicPage()
@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
})

export class BuyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Go() {
  this.navCtrl.push(OptionsPage);
  }

  GoHalf() {
  this.navCtrl.push(Options2Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyPage');
  }

}
// export class BuyPage {
//   model: Payment;
//
//   constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
//     private paymentProvider: PaymentProvider) {
//
//       this.model = new Payment;
//
//       this.model.card_number = '4018720572598048';
//       this.model.card_expiration_date = '1122';
//       this.model.card_cvv = '123';
//       this.model.card_holder_name = 'Aardvark Silva';
//   }
//
//   createCard(){
//     this.paymentProvider.createCard(this.model.card_number, this.model.card_holder_name, this.model.card_expiration_date,  this.model.card_cvv )
//       .then((result:any) => {
//         this.toast.create({ message: 'Cartao criado com sucesso. Card_id: ' + result.id, position: 'botton', duration: 3000}).present();
//
//       })
//       .catch((error: any) => {
//         this.toast.create({ message: 'Erro ao criar cartao. ', position: 'botton', duration: 3000}).present();
//
//
//       })
//
//   }
// }
//   export class Payment {
//     api_key: string;
//     card_number: string;
//     card_holder_name: string;
//     card_expiration_date: string;
//     card_cvv: string;
//   }
