import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddressPage } from '../address/address';
import { Address } from '../../models/address';

@IonicPage()
@Component({
  selector: 'page-address-book',
  templateUrl: 'address-book.html',
})
export class AddressBookPage {

  private addressBook: Array<{
    id: number;
    address: Address;
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.addressBook = [
      { id: 1, address: new Address('../../assets/imgs/user.png', 'alias 1', '42sdsvgf93ghg823')},
      { id: 2, address: new Address('../../assets/imgs/user.png', 'alias 2', 'acnjsdnjwsdsjdsd')},
      { id: 3, address: new Address('../../assets/imgs/user.png', 'alias 3', 'dfje4y7837yjsdcx')},
    ];
  }

  private addAddress() {
    this.navCtrl.push(AddressPage);
  }

  private openAddress(address) {
    this.navCtrl.push(AddressPage, address);
  }

}
