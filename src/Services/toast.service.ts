import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database"; 

import { Item } from '../Model/item';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Injectable()
export class ToastService {

constructor(private toastctrl: ToastController) {    
}


show(message: string, duration: number = 3000){
    return this.toastctrl.create({
        message,
        duration
    }).present();
}
}