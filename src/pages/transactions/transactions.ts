import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Transactions } from '../../models/transactions';

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {

  public transactionList: Transactions[];
  public search: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transactionList = [
      new Transactions(1, '12/12/2017', '34ryjhgcs35hjkjl3125lk34324s0944klnfcsjdfdsofkdofkdskfofssf', 0.3423),
      new Transactions(2, '11/12/2017', '343sdsd12sed5jh343jhjhjh839281fhn19403nc903i3iencjdiofw0w24', 0.00023),
      new Transactions(3, '09/12/2017', 'acbvy34fds353125ghgda3432sd24rewfwdqw432|7684rerqecxz231414', 0.000000232),
    ];
  }

}
