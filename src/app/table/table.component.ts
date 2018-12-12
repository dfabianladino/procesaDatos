import { Component, OnInit, Input  } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UploadComponent } from '../upload/upload.component';
import { UploadService} from '../services/upload.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
// displayedColumns: string[] = ['noMaquina', 'cantidadDatos','promedioTCH', 'tiempoTrabajo', 'promedioVelocidad', 'noDescargas' ];
displayedColumns: string[] = ['nameharvester', 'count'];


datos;
datosbd="";
cantidad;
prueba2;


  constructor(private uploadComponent: UploadComponent, private uploadService: UploadService) {

     var me=this;
     this.uploadService.getProductos().subscribe(
            result => {
                if(result.code != 200){
                    var resultAux = JSON.parse(result._body);
                    var aux= resultAux.daten;
                    me.cantidad=resultAux.count
                    me.datosbd=aux;
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

  ngOnInit() {
  this.prueba2 = this.uploadComponent.currentMessage.subscribe(datos => this.datos = datos);

  }


}
