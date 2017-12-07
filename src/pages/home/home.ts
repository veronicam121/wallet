import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReceivePage } from '../receive/receive';
import { SendPage } from '../send/send';

// import { EnviarPage } from '../enviar/enviar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
  public direction: string;
  public code: string;

  constructor(public navCtrl: NavController) {
    this.direction = '1BPmau8ewds343Bgsds34jsS2fd342saTscqS232QrTscwqQecvbv';
    this.code = 'assets/imgs/QRCode.png';
  }

  public goToReceive() {
    this.navCtrl.push(ReceivePage);
  }

  public goToSend() {
    this.navCtrl.push(SendPage);
  }

}
