import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { PaymentProvider } from './../../providers/payment/payment';
import { Ingresso1Page } from '../ingresso1/ingresso1';
/**
 * Generated class for the FormCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-card',
  templateUrl: 'form-card.html',
})
export class FormCardPage {
  model: Payment;
  pay: string;
  disableBtn: boolean;
  novo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
    private paymentProvider: PaymentProvider) {

      this.model = new Payment;

      this.model.card_number = '4242424242424242';
      this.model.card_expiration_date = "2022-11";
      this.model.card_cvv = '123';
      this.model.card_holder_name = 'Aardvark Silva';
      this.model.amount= 15000;

      console.log('data: '+ this.model.card_expiration_date);

      // toString = this.model.card_expiration_date.toString();

  }

  createCard(){

    var d = this.model.card_expiration_date;
    var n = d.toString();
    var sub = n.substring(2, 4);
    var sub2 = n.substring(5, 7);
    var datanova = sub2 + sub;

    console.log('data2: ' + sub);
    console.log('data2: ' + sub2);
    console.log('data2: ' + datanova);
    console.log('data2: ' + n);

      this.paymentProvider.createCard(this.model.card_number, this.model.card_holder_name, datanova,  this.model.card_cvv, this.model.amount )
        .then((result:any) => {
          this.navCtrl.push(Ingresso1Page);
          this.toast.create({ message: 'Transação criada com sucesso, id: ' + result.id, position: 'botton', duration: 3000}).present();
          // this.navCtrl.push(Ingresso1Page);
        })
        .catch((error: any) => {
          this.toast.create({ message: 'Erro ao criar a transação. ', position: 'botton', duration: 3000}).present();


        })
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
  export class Payment {
    api_key: string;
    card_number: string;
    card_holder_name: string;
    card_expiration_date: string;
    card_cvv: string;
    amount: number;
  }
