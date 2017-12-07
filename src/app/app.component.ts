import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';

// import { TransaccionesPage } from '../pages/transacciones/transacciones';
// import { ActividadPage } from '../pages/actividad/actividad';
// import { LibretaPage } from '../pages/libreta/libreta';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) public nav: Nav;

  public rootPage: any = HomePage;
  public pages: Array<{title: string, component: any}>;
  public username: string;
  public avatar: string;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Lista', component: ListPage },
      { title: 'Cuenta', component: AccountPage },
      // { title: 'Transacciones', component: TransaccionesPage }
      // { title: 'Actividad', component: ActividadPage }
      // { title: 'Libreta de direcciones', component: LibretaPage }

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
