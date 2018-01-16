import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database"; 

import { Item } from '../Model/item';

@Injectable()
export class ShoppingListService {

// refrence to DB: telling AngularFireBase which db of Firebase we interested in.
private shoppingListRef = this.db.list<Item>('shopping-list');

constructor(private db: AngularFireDatabase) {    
}

getShoppingList(){
    return this.shoppingListRef;
}

addItem(item: Item){
    // we push the item to the db
    return this.shoppingListRef.push(item);
}

editItem(item: Item){
    //update item selected base on the key
    return this.shoppingListRef.update(item.key, item); 
}
}