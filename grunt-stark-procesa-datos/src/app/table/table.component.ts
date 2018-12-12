import { Component, OnInit, Input  } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UploadComponent } from '../upload/upload.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  tch: number;
  fecha: string;
  //hora: string;
  //ficha: number;
  //usuario: string;
  //noMaquina: number;
  //tipocana: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 27221, name: '29336', weight: 8.89831, symbol: '262',tch: 3.2 , fecha: '7' /*hora: 'Hydrogen', ficha: 1 , usuario: 'Hydrogen'  noMaquina: 1, /*tipocana: 'Verde'*/},
  {position: 402128, name: '4754', weight: 7.89859, symbol: '160',tch: 2.5 , fecha: '8' /*hora: 'Hydrogen', ficha: 1 , usuario: 'Hydrogen'  noMaquina: 1, /*tipocana: 'Verde'*/},
  {position: 407542, name: '4662', weight: 6.0079, symbol: '212',tch: 3.3 , fecha: '5' /*hora: 'Hydrogen', ficha: 1 , usuario: 'Hydrogen'  noMaquina: 1, /*tipocana: 'Verde'*/},
  {position: 500018, name: '5612', weight: 8.2279, symbol: '267',tch: 3.2 , fecha: '9' /*hora: 'Hydrogen', ficha: 1 , usuario: 'Hydrogen'  noMaquina: 1, /*tipocana: 'Verde'*/},
  {position: 27222, name: '114542', weight: 6.1066, symbol: '301',tch: 3.6 , fecha: '10' /*hora: 'Hydrogen', ficha: 1 , usuario: 'Hydrogen'  noMaquina: 1, /*tipocana: 'Verde'*/},
  {position: 27224, name: '52570', weight: 4.4379, symbol: '219',tch: 4.1 , fecha: '7' /*hora: 'Hydrogen', ficha: 1 , usuario: 'Hydrogen'  noMaquina: 1, /*tipocana: 'Verde'*/},
  {position: 27225, name: '62752', weight: 8.0079, symbol: '233',tch: 3.6 , fecha: '8' /*hora: 'Hydrogen', ficha: 1 , usuario: 'Hydrogen'  noMaquina: 1, /*tipocana: 'Verde'*/},
  {position: 27226, name: '72752', weight: 8.0571, symbol: '238',tch: 4.0 , fecha: '12' /*hora: 'Hydrogen', ficha: 1 , usuario: 'Hydrogen'  noMaquina: 1, /*tipocana: 'Verde'*/},
];
console.log()
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
static  muestras:string []=[];


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'tch', 'fecha' /*'hora', 'ficha', 'usuario', 'noMaquina', 'tipocana'*/];
  dataSource = new MatTableDataSource([{position: 1, name: 'd', weight: 1.0079, symbol: 'H',tch: 1.0079 , fecha: 'Hydrogen', hora: 'Hydrogen', ficha: 1 , usuario: 'Hydrogen' , noMaquina: 1, tipocana: 'Verde'}]);
 //dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() {
   }

  ngOnInit() {
  }

}
