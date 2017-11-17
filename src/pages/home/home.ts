import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { TicketsPage } from '../tickets/tickets';
import { EstacionamentosPage } from '../estacionamentos/estacionamentos';
import { ConsumacaoPage } from '../consumacao/consumacao';
import { LojasPage } from '../lojas/lojas';
import { ComochegarPage } from '../comochegar/comochegar';
import { ConteudoPage } from '../conteudo/conteudo';
import { AreadosocioPage } from '../areadosocio/areadosocio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onClick() {
  this.navCtrl.push(TicketsPage);
  }
  Estac() {
  this.navCtrl.push(EstacionamentosPage);
  }
  Cons() {
  this.navCtrl.push(ConsumacaoPage);
  }
  Lojas() {
  this.navCtrl.push(LojasPage);
  }
  ComoChegar() {
  this.navCtrl.push(ComochegarPage);
  }
  Cont() {
  this.navCtrl.push(ConteudoPage);
  }
  Socio() {
  this.navCtrl.push(AreadosocioPage);
  }

}
