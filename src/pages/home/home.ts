import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseProvider } from "../../providers/database/database";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  developers = [];
  developer = {}
  constructor(public navCtrl: NavController,
    private databaseProdiver: DatabaseProvider) {
    this.databaseProdiver.getDatabaseState().subscribe(ready => {
      if (ready) {
        this.loadDeveloperData();
      }
   })
  }

  loadDeveloperData() {
    this.databaseProdiver.getAllDevelopers().then(data => {
      this.developers = [data];
    });
  }


  addDeveloper(){
    this.databaseProdiver.addDeveloper(
      this.developer['name'], 
      this.developer['skill'], 
      parseInt(this.developer['yearsOfExperience']))
      .then(data => {
      this.loadDeveloperData();
    });
    this.developer = {};
  }
}
