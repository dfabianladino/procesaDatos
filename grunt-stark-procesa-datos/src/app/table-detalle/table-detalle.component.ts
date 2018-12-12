import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  fecha: string;
  hora: string;
  tch: string;
  longitud: string;
  latitud: string;
  distancia: string;
  velocidad:string;
  noOperario:string;
  noMaquina:string;
  tipocana:string

}

const ELEMENT_DATA: PeriodicElement[] = [
  {fecha: '6/06/2018',  hora: '7:53:04', tch: '202', longitud: '3.457.010',latitud: '-7.640.275.116' , distancia: '0.25', velocidad: '0.72228', noOperario: '500018' , noMaquina: '27221'  , tipocana: 'Verde'},
  {fecha: '6/06/2018',  hora: '7:53:14', tch: '72',  longitud: '3.456.008',latitud: '-7.640.278.233' , distancia: '3.47', velocidad: '18.705', noOperario: '500018' , noMaquina: '27221' ,  tipocana: 'Verde'},
  {fecha: '6/06/2018',  hora: '7:53:24', tch: '98',  longitud: '3.601.010',latitud: '-7.640.283.916' , distancia: '6.36', velocidad: '25.002', noOperario: '500018' , noMaquina: '27221'  , tipocana: 'Verde'},
  {fecha: '6/06/2018',  hora: '7:53:34', tch: '170',  longitud: '3.601.010',latitud: '-764.029.025' ,  distancia: '7.09', velocidad: '25.187', noOperario: '500018' , noMaquina: '27221'  , tipocana: 'Verde'},
  {fecha: '6/06/2018',  hora: '7:53:44', tch: '120', longitud: '3.456.019',latitud: '-7.640.296.883' , distancia: '7.39', velocidad: '25.928', noOperario: '500018' , noMaquina: '27221'  , tipocana: 'Verde'},
  {fecha: '6/06/2018',  hora: '7:54:04', tch: '200', longitud: '34.560.155',latitud: '-76.403.027' , distancia: '6.55', velocidad: '2.315', noOperario: '500018', noMaquina: '27221'  , tipocana: 'Verde'},
  {fecha: '6/06/2018',  hora: '7:54:14', tch: '350', longitud: '34.560.125',latitud: '-7.640.308.883' , distancia: '7.23', velocidad: '24.076', noOperario: '500018' , noMaquina: '27221'  , tipocana: 'Verde'},
  {fecha: '6/06/2018',  hora: '7:54:24', tch: '72', longitud: '34.560.103',latitud: '-764.031.535' , distancia: '6.87', velocidad: '257.428', noOperario: '500018' , noMaquina: '27221'  , tipocana: 'Verde'},
  {fecha: '6/06/2018',  hora: '7:54:34', tch: '0', longitud: '3.456.007',latitud: '-7.640.321.433' , distancia: '6.71', velocidad: '253.724', noOperario: '500018' , noMaquina: '27221'  , tipocana: 'Verde'},
  {fecha: '6/06/2018',  hora: '7:54:44', tch: '0',  longitud: '34.560.003',latitud: '-76.403.274' , distancia: '6.95', velocidad: '24.631', noOperario: '500018' , noMaquina: '27221' ,  tipocana: 'Verde'},
  {fecha: '6/06/2018',  hora: '7:54:54', tch: '102',  longitud: '3.455.992',latitud: '-7.640.333.633' , distancia: '7.82', velocidad: '26.854', noOperario: '500018' , noMaquina: '27221'  , tipocana: 'Verde'},
  {fecha: '6/06/2018',  hora: '7:55:04', tch: '92',  longitud: '34.559.860',latitud: '-7.640.340.583' , distancia: '7.45', velocidad: '255.576', noOperario: '500018' , noMaquina: '27221'  , tipocana: 'Verde'},
  {fecha: '6/06/2018',  hora: '7:55:14', tch: '89', longitud: '3.455.976',latitud: '-764.034.725' , distancia: '7.52', velocidad: '279.652', noOperario: '500018' , noMaquina: '27221'  , tipocana: 'Verde'},
  {fecha: '6/06/2018',  hora: '7:55:24', tch: '78', longitud: '34.559.646',latitud: '-764.035.395' , distancia: '6.5', velocidad: '262.984', noOperario: '500018', noMaquina: '27221'  , tipocana: 'Verde'},
  {fecha: '6/06/2018',  hora: '7:55:34', tch: '100', longitud: '34.559.565',latitud: '-764.035.975' , distancia: '5.51', velocidad: '14.630', noOperario: '500018' , noMaquina: '27221'  , tipocana: 'Verde'},
  {fecha: '6/06/2018',  hora: '7:55:44', tch: '36', longitud: '34.559.451',latitud: '-7.640.354.833' , distancia: '0.33', velocidad: '116.676', noOperario: '500018' , noMaquina: '27221'  , tipocana: 'Verde'},
  {fecha: '6/06/2018',  hora: '7:55:54', tch: '89', longitud: '34.559.355',latitud: '-7.640.355.116' , distancia: '0.37', velocidad: '0.22224', noOperario: '500018' , noMaquina: '27221'  , tipocana: 'Verde'},
  {fecha: '6/06/2018',  hora: '7:56:04', tch: '21', longitud: '345.593',latitud: '-7.640.354.833' , distancia: '0.16', velocidad: '0.12964', noOperario: '500018' , noMaquina: '27221'  , tipocana: 'Verde'},
];

@Component({
  selector: 'app-table-detalle',
  templateUrl: './table-detalle.component.html',
  styleUrls: ['./table-detalle.component.css']
})
export class TableDetalleComponent implements OnInit {
  displayedColumns: string[] = ['fecha', 'hora','tch','longitud', 'latitud', 'distancia', 'velocidad','noOperario', 'noMaquina', 'tipocana'];
  //dataSource = new MatTableDataSource([{position: 1, name: this.muestras[0], weight: 1.0079, symbol: 'H',tch: 1.0079 , fecha: 'Hydrogen', hora: 'Hydrogen', ficha: 1 , usuario: 'Hydrogen' , noMaquina: 1, tipocana: 'Verde'}]);
 dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

}
