import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { AddressBookPage } from '../pages/address-book/address-book';

import { TransactionsPage } from '../pages/transactions/transactions';
// import { ActividadPage } from '../pages/actividad/actividad';
// import { LibretaPage } from '../pages/libreta/libreta';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) public nav: Nav;

  public rootPage: any = HomePage;
  public pages: Array<{
    title: string,
    component: any,
  }>;
  public username: string;
  public avatar: string;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Cuenta', component: AccountPage },
      { title: 'Libreta de Contactos', component: AddressBookPage },
      { title: 'Transacciones', component: TransactionsPage },
      // { title: 'Actividad', component: ActividadPage }

    ];
    this.avatar = '/imgs/user.png';
    this.username = 'Usuario';

  }

  public initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public openPage(page) {
    if (page.component !== this.rootPage) {
      this.nav.push(page.component);
    }
  }

  public logOut() {
    this.nav.setRoot(LoginPage);
  }
}
