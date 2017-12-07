import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

// Lista de Páginas
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ReceivePage } from '../pages/receive/receive';
import { SendPage } from '../pages/send/send';

@NgModule({
  bootstrap: [IonicApp],
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AccountPage,
    LoginPage,
    RegisterPage,
    ReceivePage,
    SendPage,

  ],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AccountPage,
    LoginPage,
    RegisterPage,
    ReceivePage,
    SendPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler,
    },
  ],
})
export class AppModule {}
