import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../Model/item';
import { ShoppingListService } from '../../Services/shopping-list-service';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

   item: Item = {
    name: "",
    quantity: 0,
    price: 0
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private shoppingService: ShoppingListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }


  addItem(item: Item){
      this.shoppingService.addItem(item).then (ref => {
        console.log(ref.key);
        this.navCtrl.setRoot('HomePage');
    });
  }
}
