import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatabaseProvider } from '../providers/database/database';

import { IonicStorageModule } from "@ionic/storage"; //ekle
import { HttpModule } from "@angular/http"; //ekle

import { SQLitePorter } from "@ionic-native/sqlite-porter"; //ekle
import { SQLite} from "@ionic-native/sqlite"; //ekle

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule, //ekle
    IonicStorageModule.forRoot(), //ekle
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    SQLitePorter, //ekle
    SQLite, //ekle
  ]
})
export class AppModule {}
