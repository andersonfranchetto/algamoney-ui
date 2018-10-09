import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos'

  constructor(private http: HttpClient) {
  }

  pesquisar(): Observable<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json; charset=utf-8; charset=utf-8')
      .append('Authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTM5MDk3NTI4LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiI0ZTFmYzgxMi05ZTk3LTRjN2YtOTJmNi0xMTFiNjNhMmFkMDkiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.slX4mNRXXefmng0SqCrNgzl-qSnFccbw91tq9kX7rUs');

    this.http.get(`${this.lancamentosUrl}?resumo`, { headers })
      .toPromise()
      .then(response => {
        console.log(response);
      })
  }
}
