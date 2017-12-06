import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cuenta',
  templateUrl: 'cuenta.html',
})
export class CuentaPage {

  username: string;
  avatar:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.avatar='/imgs/user.png';
    this.username='Usuario';
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuentaPage');
  }

}
