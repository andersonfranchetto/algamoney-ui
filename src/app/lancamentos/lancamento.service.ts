import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import { map } from 'rxjs/operators';


export interface LancamentoFiltro {
  descricao: string;
}

@Injectable()
export class LancamentoService {

  url = 'http://192.168.10.5:8081/lancamentos'

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTM5MjAyNDIxLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiJhZjI0ZmMzYS04ZDFiLTQ3ZGMtYWMzZi1iNTEzZTIwMTcwZjgiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.Xl7n5e0JrfWfGRLFXEFgKKlpJc37eYIm4xHzujZPEYM';

  constructor(private http: HttpClient) {
  }

  pesquisar(filtro: LancamentoFiltro): Observable<any> {

    let params = new HttpParams();

    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json; charset=utf-8; charset=utf-8')
      .append('Authorization', 'bearer ' + this.token);

    if (filtro.descricao) {
      params = params.append('descricao', filtro.descricao);
    }

    return this.http.get(`${this.url}?resumo`,
      {headers, params})
      .pipe(
        map(response => response["content"])
      );
  }
}
