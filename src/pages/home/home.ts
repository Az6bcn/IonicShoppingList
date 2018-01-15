import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AddShoppingItemPage } from '../add-shopping-item/add-shopping-item';
import { AddItemReactiveFormPage } from '../add-item-reactive-form/add-item-reactive-form';

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

  private goToAddShoppingItemReativeFormPage(){
    this.navCtrl.push(AddItemReactiveFormPage);
  }
}
