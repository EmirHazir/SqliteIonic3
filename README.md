This is a  [Ionic](http://ionicframework.com/docs/) project about how to use Sqlite queries & pre-populated database by Emir Hazir.

## How to use this template

Create a DumyData in assest check the project
than create a provider named database
and install plugins 
1- ionic cordova plugin add uk.co.workingedge.cordova.plugin.sqliteport
er
2- ionic cordova plugin add cordova-sqlite-storage
3- npm install --save @ionic-native/sqlite-porter
4- npm install --save @ionic-native/sqlite
5- npm install --save @ionic/storage

you need some configurate app.module.ts 
import { IonicStorageModule } from "@ionic/storage"; 
import { HttpModule } from "@angular/http"; 

import { SQLitePorter } from "@ionic-native/sqlite-porter"; 
import { SQLite} from "@ionic-native/sqlite"; 

imports array => HttpModule, 
    IonicStorageModule.forRoot(), 

providers array => SQLitePorter, 
    SQLite,  


ionic serve 



