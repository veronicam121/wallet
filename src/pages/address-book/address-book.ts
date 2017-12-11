import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddressPage } from '../address/address';

@IonicPage()
@Component({
  selector: 'page-address-book',
  templateUrl: 'address-book.html',
})
export class AddressBookPage {

  private addressBook: Array<{
    img: string,
    alias: string,
    address: string,
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.addressBook = [
      { img: '/imgs/user.png', alias: 'usuario 1', address: '123456789'},
      { img: '/imgs/user.png', alias: 'usuario 2', address: '98765432121'},
      { img: '/imgs/user.png', alias: 'usuario 3', address: 'hsdushduishid'},
    ];
  }

  private addAddress() {
    this.navCtrl.push(AddressPage);
  }

  private openAddress(address) {
    this.navCtrl.push(AddressPage, address);
  }

}
