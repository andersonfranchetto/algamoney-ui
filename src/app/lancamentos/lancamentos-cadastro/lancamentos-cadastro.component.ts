import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamentos-cadastro.component.html',
  styleUrls: ['./lancamentos-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'}
  ]

  categorias = [
    {label: 'Alimentação', value: 1},
    {label: 'Transporte', value: 2}
  ]

  pessoas = [
    {label: 'João Script', value: 1},
    {label: 'Sebastião Jar', value: 2},
    {label: 'Maria Java', value: 3}
  ]

  constructor() { }

  ngOnInit() {
  }

}
