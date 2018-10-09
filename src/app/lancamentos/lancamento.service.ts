import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos'

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTM5MTE1MTg1LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiIyMTdmMzIwNi1mZDliLTRlNTItYTA2YS04Zjg3NGQ5MzQzNDQiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.O3DXxzVGqNRftNeD3n_MBmGUF6KC3-zWSXSbl6bUNiE';

  constructor(private http: HttpClient) {}

  pesquisar(): Observable<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json; charset=utf-8; charset=utf-8')
      .append('Authorization', 'bearer ' + this.token);

    return this.http.get(`${this.lancamentosUrl}?resumo`, { headers })
      .map( response => response["content"]);
  }
}
