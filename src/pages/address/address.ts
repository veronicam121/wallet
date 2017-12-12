import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms/src/model';
import { Address } from '../../models/address';

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {

  private address: Address;
  private action: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.get('id') === undefined) {
      this.action = 'Agregar ';
      this.address = new Address('', '', '');
    } else {
      const result = this.navParams.get('address');
      this.address = new Address(
        result.getImg(),
        result.getAlias(),
        result.getAddress(),
      );
    }
  }
}
