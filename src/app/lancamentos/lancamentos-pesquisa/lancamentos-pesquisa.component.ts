import {Component, OnInit} from '@angular/core';
import {LancamentoService} from "../lancamento.service";

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit{

  descricao: string;

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

  ngOnInit(){
    this.pesquisar();
  }

  pesquisar() {
    this.lancamentoService.pesquisar( { descricao: this.descricao } )
      .subscribe(lancamentos => this.lancamentos = lancamentos);
  }
}
