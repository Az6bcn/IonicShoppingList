import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddItemReactiveFormPage } from './add-item-reactive-form';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddItemReactiveFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AddItemReactiveFormPage),
    ReactiveFormsModule
  ],
})
export class AddItemReactiveFormPageModule {}
