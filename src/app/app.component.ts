import { Component } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material";
import {AccessService} from './services/access.service'
import {Route, Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor (
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry,
    private accessService: AccessService,
    private router: Router) {
    //add custom material icons
    matIconRegistry.addSvgIcon(
    'castilla',
    domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/logo_riopaila.svg') );
  }

}
