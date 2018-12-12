import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { RequestOptions} from '@angular/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AccessService {
   headers: Headers;
   options: RequestOptions;
   public token: string;
  constructor(private http: HttpClient) {}

  API_ENDPOINT = 'https://rest-analysedaten.herokuapp.com';

    login(email: string, password: string ) {

        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<any>(this.API_ENDPOINT + '/user/login', {email, password}, {headers: headers})
            .pipe(map(res => {
                // console.log(res.token)
                localStorage.setItem('userLogin', JSON.stringify(res));
                return res;
            }

          ));
    }

    logout() {
        // remove user from local storage to log user out
       localStorage.removeItem('userLogin');
    }
    getStatus() {
      return localStorage.getItem('userLogin');
    }

    getDetails(): Observable<any> {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const userLogin = JSON.parse(localStorage.getItem('userLogin'));
      const aux = userLogin.token;
      const Authorization =  { Authorization: 'Bearer' + aux };
      return this.http.get(this.API_ENDPOINT + '/datendetail', { headers: Authorization});
    }

    addFile(file) {

      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.post<any>(this.API_ENDPOINT + '/daten', file, {headers: headers} )
      .pipe(map(res => {
        console.log(res);
        return res;
      }));
    }

}
