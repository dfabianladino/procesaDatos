import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Import Material Module
import { MaterialModule } from './material.module';
import 'hammerjs';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { HttpModule } from '@angular/http';
import { UploadComponent } from './upload/upload.component';
import { TableComponent } from './table/table.component';
import { TableDetalleComponent } from './table-detalle/table-detalle.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyCxrM6sa08VPBy5XOtcU50cpnMUVqns83A",
    authDomain: "riopaila-e063e.firebaseapp.com",
    databaseURL: "https://riopaila-e063e.firebaseio.com",
    projectId: "riopaila-e063e",
    storageBucket: "riopaila-e063e.appspot.com",
    messagingSenderId: "1056672416539"
};

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    TableComponent,
    TableDetalleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    HttpModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
