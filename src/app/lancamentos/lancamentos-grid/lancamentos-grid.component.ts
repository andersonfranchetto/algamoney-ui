import {Component, EventEmitter, Input, Output} from '@angular/core';
import { LancamentoFiltro } from "../lancamento.service";

@Component({
  selector: 'app-lancamentos-grid',
  templateUrl: './lancamentos-grid.component.html',
  styleUrls: ['./lancamentos-grid.component.css']
})
export class LancamentosGridComponent {

  @Input() filtro: LancamentoFiltro;
  @Input() totalRegistros;
  @Input() lancamentos=[];
  @Input() cols=[];
  @Output() numeroPagina = new EventEmitter();

  aoMudarPagina(event){
   this.numeroPagina.emit(event.first / event.rows);
  }
}
