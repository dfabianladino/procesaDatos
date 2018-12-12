import {Injectable, Injector} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AccessService} from '../services/access.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
   valor = localStorage.getItem('userLogin')
constructor(private accessService:AccessService){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let userLogin = JSON.parse(localStorage.getItem('userLogin'));
        if (userLogin && userLogin.token) {
        
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${userLogin.token}`
                }
            });
        }
        return next.handle(request);
    }

}
