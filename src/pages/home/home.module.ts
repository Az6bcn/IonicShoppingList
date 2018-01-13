import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage)] // comes from IonicAngular => lazy loads Homepage
})

export class HomeModule{

}