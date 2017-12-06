import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CuentaPage } from '../pages/cuenta/cuenta';

//import { TransaccionesPage } from '../pages/transacciones/transacciones';
//import { ActividadPage } from '../pages/actividad/actividad';
//import { LibretaPage } from '../pages/libreta/libreta';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  username: string;
  avatar:string;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Lista', component: ListPage },
      { title: 'Cuenta', component: CuentaPage }
      //{ title: 'Transacciones', component: TransaccionesPage }
      //{ title: 'Actividad', component: ActividadPage }
      //{ title: 'Libreta de direcciones', component: LibretaPage }

    ];
    this.avatar='/imgs/user.png';
    this.username='Usuario';

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
