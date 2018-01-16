import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AddShoppingItemPage } from '../add-shopping-item/add-shopping-item';
import { AddItemReactiveFormPage } from '../add-item-reactive-form/add-item-reactive-form';
import { ShoppingListService } from '../../Services/shopping-list-service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../Model/item';
import { EditShoppingPage } from '../edit-shopping/edit-shopping';

@IonicPage() // adding this on top of all components we can lazy load them inside app.component.ts
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   shoppingListFromAPI$: Observable<Item[]>

  constructor(public navCtrl: NavController,
              private shoppingListService: ShoppingListService) {

  }
  
ngOnInit(){

  this.shoppingListFromAPI$ = this.shoppingListService.getShoppingList() // returns DB List
                              .snapshotChanges() // return both the key and value.
                              //.valueChanges() // to get only the values
                              .map(
                                changes =>{ // list of changes 
                                  // for each one of the changes we return a new object {key: value, name:..., quantity.. etc}
                               return changes.map(c => ({
                                    key: c.payload.key, ...c.payload.val()
                                  }))
                                }
                              )
                              //.valueChanges() // to get only the values
}

  private goToAddShoppingItemPage() {
    // navigate to ToAddShoppingItemPage
    this.navCtrl.push(AddShoppingItemPage);
  }

  private goToAddShoppingItemReativeFormPage(){
    this.navCtrl.push(AddItemReactiveFormPage);
  }

 
}
