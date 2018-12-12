import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UploadService {

datos;
headers: Headers;
private messageSource = new BehaviorSubject('esto como se cambia');
datosbd = this.messageSource.asObservable();

API_ENDPOINT = 'https://rest-analysedaten.herokuapp.com/';


    getProductos(): Observable<any> {
       return this.http.get(this.API_ENDPOINT + 'daten');
    }



  constructor(private http: Http) {}
}
