import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms/src/model';

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {

  private address: {
    img: string,
    alias: string,
    address: string,
  };
  private action: string;
  private editAddress: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.get('alias')) {
      // this.address = {
        // img = this.navParams.get("img"),
        // alias = this.navParams.get("alias"),
        // address = this.navParams.get("address"),
      // };

    } else {
      this.action = 'Agregar ';
    }
  }
}
