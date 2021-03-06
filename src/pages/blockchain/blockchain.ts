import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestService } from '../../app/services/rest.service';
import { AlertService } from '../../app/services/alert.service';
import { IBlockchain } from '../../app/models/IBlockchain';

// Component for displaying the updated data from the blockchain

@IonicPage()
@Component({
  selector: 'page-blockchain',
  templateUrl: 'blockchain.html',
})
export class BlockchainPage {

  private blockchain: IBlockchain;
  private chart: [{
    values: {
      x: number;
      y: number;
    },
  }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private restService: RestService) {
  }

  // Loads the Blockchain data
  private ngOnInit() {
    if (this.restService.blockChain === undefined) {
      this.restService.getBlockchain()
        .subscribe((data) => {
          this.blockchain = data;
        },
        (error) => {
          this.restService.showAlert(error).then((res) => {
            this.navCtrl.pop();
          },
            (err) => {
              this.navCtrl.pop();
            });
        });
    } else {
      this.blockchain = this.restService.blockChain;
    }
/*     this.restService.getChart().subscribe((data) => {
      this.chart = data;
      console.log(this.chart);
    },
    (error) => {
      console.log(error);
    },
    ); */
  }
}
