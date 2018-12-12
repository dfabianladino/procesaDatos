import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Import Material Module
import { MaterialModule } from './material.module';
import 'hammerjs';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { HttpModule } from '@angular/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material';
import { UploadComponent } from './upload/upload.component';
import { TableComponent } from './table/table.component';
import { TableDetalleComponent } from './table-detalle/table-detalle.component';
import { UploadService } from './services/upload.service';
import { AccessService } from './services/access.service';
import { LoginComponent } from './login/login.component';
import { MomentModule } from 'angular2-moment';
import { CardMarchineComponent } from './card-marchine/card-marchine.component';
import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import {AuthGuard} from './_guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    TableComponent,
    TableDetalleComponent,
    LoginComponent,
    CardMarchineComponent

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
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatDividerModule,
    MatCardModule,
    MomentModule,
    MatPaginatorModule,
    RouterModule,
    routing
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    UploadService, AccessService],
  bootstrap: [AppComponent]
})

export class AppModule { }
