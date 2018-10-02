import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { LancamentoCadastroComponent } from "./lancamentos-cadastro/lancamentos-cadastro.component";
import { LancamentosGridComponent } from "./lancamentos-grid/lancamentos-grid.component";
import { LancamentosPesquisaComponent } from "./lancamentos-pesquisa/lancamentos-pesquisa.component";
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule, InputTextareaModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SelectButtonModule } from 'primeng/selectbutton';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,

    SharedModule
  ],
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentosGridComponent
  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentosGridComponent
  ]

})
export class LancamentosModule { }
