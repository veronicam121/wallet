import { Component, ViewChild } from '@angular/core';
import { IonicPage,  NavController, NavParams} from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { RegisterPage } from '../register/register';
import { AuthService } from '../../app/services/auth.service';

// Component for the Login Page
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private authService: AuthService) {
  }

  private loginGoogle() {
    this.authService.loginGoogle();
    this.navCtrl.setRoot(HomePage);
  }

  private loginEmail() {
    this.goToLogin();
  }
  private goToLogin() {
    this.navCtrl.setRoot(HomePage);
  }

  private goToRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
