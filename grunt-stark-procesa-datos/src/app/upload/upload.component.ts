import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {tableInf} from './upload.model';

let arrayFilas:any[];
var logitud: string;


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {
nombre='dany';
txtContent: Text;
lat:any[];

public leeArchivos(numarchivo:number,file:any) {
  var fr = new FileReader();

  fr.onload = function(e) {
    var text = fr.result;
    var rows = text.split("\n");
    arrayFilas=[];
    for (var t=0;t<rows.length-1;t++) {
      if (rows[t].length!=0) {
          arrayFilas.push(rows[t].split(";"));
          //lat=arrayFilas[t][0];
          //console.log("datos: " + lat);

      }
    }
    if(arrayFilas.length > 0){
      //console.log("tamaño: "+lat.length);
      var estado=true;
    }

    //var myJsonString = JSON.stringify(arrayFilas)

    console.log("Datos: " + arrayFilas);
    if(numarchivo==0) {
    console.log("numero" + numarchivo);
      TableComponent.muestras=arrayFilas.slice();
      //debugger;
    } else if (numarchivo==1) {
      //TableComponent.muestras2=arrayFilas.slice();
    }
  };
  fr.readAsText(file,'ISO-8859-4');
  return arrayFilas;
}
public onFileSelect(input: HTMLInputElement) {
  var files = input.files;
  var len = files.length;
  for (var b=0;b<len;b++) {
    this.leeArchivos(b,files[b]);
  }
  console.log("aqui llega" +arrayFilas)
}

constructor() {}

  ngOnInit() {
  }
}
