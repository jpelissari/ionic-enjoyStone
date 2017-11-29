import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';

import { PaymentProvider } from './../../providers/payment/payment';
import { LojasPage } from '../lojas/lojas';
import { FormCardPage } from '../form-card/form-card';
/**
 * Generated class for the AreadosocioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-areadosocio',
  templateUrl: 'areadosocio.html',
})
export class AreadosocioPage {
  model: Payment;
  pay: string;
  disableBtn: boolean;
  novo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
    private paymentProvider: PaymentProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

      if (this.pay == null){
        this.disableBtn =true;
      }

      this.model = new Payment;

      this.model.card_number = '4242424242424242';
      this.model.card_expiration_date = '1122';
      this.model.card_cvv = '123';
<<<<<<< HEAD
      this.model.card_holder_name = 'Jhenyffer Pelissari';
=======
      this.model.card_holder_name = 'Fabrizzio Fazenda';
>>>>>>> b087bbe03fbe2513742a2e57883d1fe1ab42daeb
      this.model.amount= 16950;
  }

  func(pay){
    if (pay != null || pay != "")
    {
      console.log('entrei aqui1:' + pay);
      this.disableBtn=false;
    }
  }

  createCard(pay){

      console.log('entrei aquiiiii:' + pay);
    if (pay != "s")  {
      console.log('entrei aqui2:' + pay);
      this.navCtrl.push(FormCardPage);
    }

    else{
      this.paymentProvider.createCard(this.model.card_number, this.model.card_holder_name, this.model.card_expiration_date,  this.model.card_cvv, this.model.amount )
        .then((result:any) => {
          this.toast.create({ message: 'Transação criada com sucesso, id: ' + result.id, position: 'botton', duration: 3000}).present();
          let loader = this.loadingCtrl.create({
              content: "Aguarde...",
              duration: 1500
            });
            loader.present();
          this.navCtrl.push(LojasPage);
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
