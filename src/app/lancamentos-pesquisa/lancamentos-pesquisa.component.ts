import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/07/2017', dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José'},
    {tipo: 'RECEITA', descricao: 'Venda de Software', dataVencimento: '10/06/2017', dataPagamento: '09/06/2017', valor: 80000, pessoa: 'Atacado Brasil'},
    {tipo: 'DESPESA', descricao: 'Pagamento de luz', dataVencimento: '10/06/2017', dataPagamento: '09/06/2017', valor: 80000, pessoa: 'Elktro SA'}
  ]

}
