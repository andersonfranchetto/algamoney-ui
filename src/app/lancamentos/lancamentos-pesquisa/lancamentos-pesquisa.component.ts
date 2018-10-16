import {Component, OnInit } from '@angular/core';
import {LancamentoFiltro, LancamentoService} from "../lancamento.service";

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit{

  totalRegistros = 0;

  filtro = new LancamentoFiltro();
  lancamentos = [];

  cols = [
    {header: 'Pessoa'},
    {header: 'Descrição'},
    {header: 'Vencimento'},
    {header: 'Pagamento'},
    {header: 'Valor'},
    {header: 'Ações'}
  ];

  constructor(private lancamentoService: LancamentoService){}

  ngOnInit(){}

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.lancamentoService.pesquisar(this.filtro)
      .subscribe(lancamentos => {
          this.lancamentos = lancamentos.content,
          this.totalRegistros = lancamentos.totalElements
        }
      );
  }

  aoMudarPagina(numeroPagina) {
    this.pesquisar(numeroPagina);
  }
}
