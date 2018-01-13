import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AddShoppingItemPage } from '../add-shopping-item/add-shopping-item';

@IonicPage() // adding this on top of all components we can lazy load them inside app.component.ts
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  private goToAddShoppingItemPage() {

    // navigate to ToAddShoppingItemPage
    this.navCtrl.push(AddShoppingItemPage);
  }
}
