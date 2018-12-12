import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AccessService} from '../services/access.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginParams: any = {};
 loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    hide = true;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private accessService: AccessService, private router: Router, private route: ActivatedRoute) {}


  ngOnInit() {

    this.accessService.logout();
  }


  login() {
    this.accessService.login(this.loginParams.email, this.loginParams.password)
    .pipe(first())
        .subscribe(
            data => {
                this.router.navigate(['main']);
            },
            error => {
                this.error = error;
            });
  }

}
