import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the AddItemReactiveFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item-reactive-form',
  templateUrl: 'add-item-reactive-form.html',
})
export class AddItemReactiveFormPage {
  public itemForm: FormGroup;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private fb: FormBuilder) {

                
  }

ngOnInit(){
  this.loadItemFormGroup(); 
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemReactiveFormPage');
   
  }
  ionViewWillEnter() {
    //this.loadItemFormGroup();  
  console.log("FormObject2", this.itemForm);
  }

  

  private loadItemFormGroup(){
    this.itemForm = AddItemReactiveFormPage.getItemFormGroup(this.fb);
  }


  static getItemFormGroup (builder: FormBuilder){
    return builder.group({
        Name: ["", [Validators.required]],
        Quantity: [null, [Validators.required]],
        Price: ["", [Validators.required]]
    });
}


}
