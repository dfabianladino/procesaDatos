import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadComponent} from '../upload/upload.component';
import { UploadService} from '../services/upload.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table-detalle',
  templateUrl: './table-detalle.component.html',
  styleUrls: ['./table-detalle.component.css']
})
export class TableDetalleComponent implements OnInit {
  datos;
  datosbd;
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['fecha', 'hora', 'tch', 'latitud', 'longitud', 'distancia', 'velocidad', 'id_ficha_usuario', 'exprimario', 'tipocana' ];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private uploadComponent: UploadComponent, private uploadService: UploadService) {

      }

  ngOnInit() {
    this.uploadComponent.currentMessage.subscribe(datos => this.datos = datos);

    const me = this;
    this.uploadService.getProductos().subscribe(
           result => {
               if (result.code !== 200) {
                   const resultAux = JSON.parse(result._body);
                   const aux = resultAux.daten;
                   // me.cantidad=resultAux.count
                   me.datosbd = aux;
                   me.datosbd = new MatTableDataSource(aux);
                   me.datosbd.paginator = me.paginator;
                   me.datosbd.sort = me.sort;
               } else {
                   this.datosbd = result.data;
                   console.log('Eror');
               }
           },
           error => {
               console.log(<any>error);
           }
       );



  }

  applyFilter(filterValue: string) {
  this.datosbd.filter = filterValue.trim().toLowerCase();

  if (this.datosbd.paginator) {
    this.datosbd.paginator.firstPage();
  }
}





}
