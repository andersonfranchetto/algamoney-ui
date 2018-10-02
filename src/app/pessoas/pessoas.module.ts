import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule, InputMaskModule, InputTextareaModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SelectButtonModule } from 'primeng/selectbutton';
import { BrowserModule } from '@angular/platform-browser';
import { PessoasCadastroComponent } from  './pessoas-cadastro/pessoas-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { TableModule } from 'primeng/table';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    TableModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,


    SharedModule
  ],
  declarations: [
    PessoasCadastroComponent,
    PessoasPesquisaComponent
  ],
  exports: [
    PessoasCadastroComponent,
    PessoasPesquisaComponent
  ]
})
export class PessoasModule { }
