import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { EnviarPage } from '../enviar/enviar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cuenta:string;

  constructor(public navCtrl: NavController) {
    this.cuenta="1BPmau8ewds343Bgsds34jsS2fd342saTscqS";
  }

  goToRecibir(){

  }

  gotToEnviar(){

  }

}
