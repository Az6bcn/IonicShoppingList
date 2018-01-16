import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../Model/item';
import { ShoppingListService } from '../../Services/shopping-list-service';

/**
 * Generated class for the EditShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping',
  templateUrl: 'edit-shopping.html',
})
export class EditShoppingPage {

  item:Item;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private shoppingListService: ShoppingListService) {
  }

  ionViewWillLoad(){
    this.item = this.navParams.get('item');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad EditShoppingPage');
    console.log(this.navParams.get('item'));
  }

  saveItem(itemToEdit: Item){
      this.shoppingListService.editItem(itemToEdit)
          .then(() => { // when completed navigate back to the hompepage
              this.navCtrl.setRoot('HomePage');
          })
  }

}
