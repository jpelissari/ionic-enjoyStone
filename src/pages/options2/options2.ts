import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { PaymentProvider } from './../../providers/payment/payment';
import { Ingresso1Page } from '../ingresso1/ingresso1';
import { FormCardPage } from '../form-card/form-card';

/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-options2',
  templateUrl: 'options2.html',
})

export class Options2Page {
  model: Payment;
  pay: string;
  disableBtn: boolean;
  novo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
    private paymentProvider: PaymentProvider, public alertCtrl: AlertController) {

      if (this.pay == null){
        this.disableBtn =true;
      }

      this.model = new Payment;

      this.model.card_number = '4242424242424242';
      this.model.card_expiration_date = '1122';
      this.model.card_cvv = '123';
      this.model.card_holder_name = 'Aardvark Silva';
      this.model.amount= 7500;
  }

  func(pay){
    if (pay != null || pay != "")
    {
      console.log('entrei aqui1:' + pay);
      this.disableBtn=false;
    }
  }

  createCard(pay){

    if (pay = "n")  {
      console.log('entrei aqui2:' + pay);
      this.navCtrl.push(FormCardPage);
    }

    else{
      this.paymentProvider.createCard(this.model.card_number, this.model.card_holder_name, this.model.card_expiration_date,  this.model.card_cvv, this.model.amount )
        .then((result:any) => {
          this.toast.create({ message: 'Transação criada com sucesso, id: ' + result.id, position: 'botton', duration: 3000}).present();
          this.navCtrl.push(Ingresso1Page);
        })
        .catch((error: any) => {
          this.toast.create({ message: 'Erro ao criar a transação. ', position: 'botton', duration: 3000}).present();


        })
      }
    }
}


  export class Payment {
    api_key: string;
    card_number: string;
    card_holder_name: string;
    card_expiration_date: string;
    card_cvv: string;
    amount: number;
  }
