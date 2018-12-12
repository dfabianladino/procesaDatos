import { Component, OnInit } from '@angular/core';
import { AccessService} from '../services/access.service';
import { first } from 'rxjs/operators';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-card-marchine',
  templateUrl: './card-marchine.component.html',
  styleUrls: ['./card-marchine.component.css']
})
export class CardMarchineComponent implements OnInit {
datosbd="";
fileText:any;
datos:any;
error = '';
  constructor(private accessService: AccessService) {}

  ngOnInit() {

    //this.userService.getAll().pipe(first()).subscribe(users => {
      //          this.users = users;

    var me=this;
    this.accessService.getDetails().subscribe(
           result => {
               if(result.code != 200){
                   me.datosbd=result;
               }else{
                   this.datosbd = result.data;
                   console.log("Error")
               }
           },
           error => {
               console.log(<any>error);
           }
       );
  }
}
