import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'Http://localhost:8080/lancamentos'

  constructor(private http: HttpClient) {}

  pesquisar(): Observable<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    this.http.get(`${this.lancamentosUrl}?resumo`, { headers })
      .toPromise()
      .then(response=>{
        console.log(response.json());
      })
  }
}
