import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';

@Component({
  //templateUrl: './home.html'
  template: `
  <ion-navbar *navbar>
    <ion-title>
      Blank Starter
    </ion-title>
  </ion-navbar>

  <ion-content class="home">
    <h1 text-center>Content goes here</h1>
  </ion-content>
  `
})
export class HomePage {
  constructor(private _navController: NavController) {
  }

  /*
    pushPage(){
      this._navController.push(SomeImportedPage, { userId: "12345"});
    }
  */
}
