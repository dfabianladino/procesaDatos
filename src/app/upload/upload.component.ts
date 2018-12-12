import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {tableInf} from './upload.model';
import {UploadService} from '../services/upload.service';
import {AccessService} from '../services/access.service';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})



export class UploadComponent implements OnInit {

constructor(private uploadService: UploadService, private accessService: AccessService) {}

displayedColumns: string[] = ['noMaquina', 'cantidadDatos','promedioTCH', 'tiempoTrabajo', 'promedioVelocidad', 'noDescargas' ];
fileText:any;
datos:any;
da="dany"
sumaVelocidad=0;
promedioVelocidad=0;
resultado=0;
cantidadDatos=0;
datosServices=0;;
tiempo="";
minutesAux=0;
promedioTch=0;
sumaTch=0;
datosJson:any;
noMaquina;
text:any;
tatos:any;
jsonAxu;
error = '';
private messageSource = new BehaviorSubject("esto esta en la tabla");
currentMessage = this.messageSource.asObservable();

fileUpload(event) {
  debugger;
   var reader = new FileReader();
   reader.readAsText(event.srcElement.files[0]);
   var me = this;
   reader.onload = function () {
     me.fileText = reader.result;
     var json = me.fileText;
     me.datos = json
     console.log(me.datos);

      me.messageSource.next(me.datos);

    if(me.datos){
      console.log("datos del if")
      me.addFiles(me.datos);
    }
      //me.addFiles(me.datos)

   }

 }

 addFiles(file){
   console.log("asi era:")
   console.log(this.datos)
   this.accessService.addFile(this.datos)
   .pipe(first())
       .subscribe(
           data => {
               console.log("datos archivos");
               console.log(data);
           },
           error => {
               this.error = error;
           });
 }

  ngOnInit() {




  }
}
