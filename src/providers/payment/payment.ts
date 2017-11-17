import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentProvider {

  private API_URL = 'https://api.pagar.me/'

  constructor(public http: Http) { }

      createCard(card_number: string, card_holder_name: string, card_expiration_date: string, card_cvv: string, amount: number){
        return new Promise((resolve, reject) => {
            var data = {
              api_key: 'ak_test_pkrPokRp5bwpsEhhm4sGCdyF7qlnNm',
              card_number: card_number,
              card_holder_name: card_holder_name,
              card_expiration_date: card_expiration_date,
              card_cvv: card_cvv,
              capture: true,
              async: false,
              installments: 1,
              payment_method:'credit_card',
              amount: amount,
            };

            this.http.post(this.API_URL + '1/transactions', data)
              .subscribe((result: any) => {
                  resolve(result.json());
                  console.log('entrei aqui');
                },
              (error) => {
                reject(error.json());
              })
        });
      }
    }
