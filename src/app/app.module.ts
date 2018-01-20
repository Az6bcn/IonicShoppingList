import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFRIG } from './firebase.credentials';
import { AddShoppingItemPage } from '../pages/add-shopping-item/add-shopping-item';
import { AddItemReactiveFormPage } from '../pages/add-item-reactive-form/add-item-reactive-form';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingListService } from '../Services/shopping-list-service';
import { EditShoppingPage } from '../pages/edit-shopping/edit-shopping';
import { ToastService } from '../Services/toast.service';
import { EditShoppingPageModule } from '../pages/edit-shopping/edit-shopping.module';
import { AddShoppingItemPageModule } from '../pages/add-shopping-item/add-shopping-item.module';
import { AddItemReactiveFormPageModule } from '../pages/add-item-reactive-form/add-item-reactive-form.module';


@NgModule({
  declarations: [
    MyApp,
    // HomePage ## commented bcos not needed as we lazy loading it
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFRIG), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    ReactiveFormsModule,
    // import the created pages modules
    AddShoppingItemPageModule,
    AddItemReactiveFormPageModule,
    EditShoppingPageModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage
    AddShoppingItemPage,
    AddItemReactiveFormPage,
    EditShoppingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService, // service
    ToastService
  ]
})
export class AppModule {}
