import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../Model/item';
import { ShoppingListService } from '../../Services/shopping-list-service';
import { ToastService } from '../../Services/toast.service';

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
              private shoppingListService: ShoppingListService,
              private toastService: ToastService) {
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
          .then(() => { // when completed : show toast and navigate back to the hompepage
            this.toastService.show(`${itemToEdit.name} Saved!`, 5000);

            this.navCtrl.setRoot('HomePage');
          })
  }

  removeItem(item: Item){
    this.shoppingListService.removeItem(item)
    .then(() => {
        this.toastService.show(`${item.name} Deleted`, 5000 );
        
        this.navCtrl.setRoot('HomePage');

    })
  }

}
