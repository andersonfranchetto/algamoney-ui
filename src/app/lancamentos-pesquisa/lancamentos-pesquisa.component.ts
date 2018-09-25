import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30), dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José'},
    {tipo: 'RECEITA', descricao: 'Venda de Software', dataVencimento: new Date(2017, 5, 10), dataPagamento: new Date(2017, 5, 9), valor: 80000, pessoa: 'Atacado Brasil'},
    {tipo: 'DESPESA', descricao: 'Pagamento de luz', dataVencimento: new Date(2017, 5, 10), dataPagamento: new Date(2017, 5, 8), valor: 80000, pessoa: 'Elktro SA'}
  ]

}
