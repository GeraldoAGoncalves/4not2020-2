import { NgxMaskModule, IConfig } from 'ngx-mask'
 
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Habilitar formatação de moeda e data em português
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

/*****/
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
/*****/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CursoListComponent } from './curso/curso-list/curso-list.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { FormsModule } from '@angular/forms';
import { clienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { clienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { representanteListComponent } from './representante/representante-list/representante-list.component';
import { representanteFormComponent } from './representante/representante-form/representante-form.component';
import { produtoListComponent } from './produto/produto-list/produto-list.component';
import { produtoFormComponent } from './produto/produto-form/produto-form.component';
import { tipo_prodListComponent } from './tipo_prod/tipo_prod-list/tipo_prod-list.component';
import { tipo_prodFormComponent } from './tipo_prod/tipo_prod-form/tipo_prod-form.component';
import { unidadeListComponent } from './unidade/unidade-list/unidade-list.component';
import { unidadeFormComponent } from './unidade/unidade-form/unidade-form.component';
import { filialListComponent } from './filial/filial-list/filial-list.component';
import { filialFormComponent } from './filial/filial-form/filial-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainFooterComponent,
    MainMenuComponent,
    CursoListComponent,
    CursoFormComponent,
    clienteListComponent,
    clienteFormComponent,
    representanteListComponent,
    representanteFormComponent,
    produtoListComponent,
    produtoFormComponent,
    tipo_prodListComponent,
    tipo_prodFormComponent,
    unidadeListComponent,
    unidadeFormComponent,
    filialListComponent,
    filialFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatMomentDateModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
  // No app.module.ts, dentro seção providers
  /**** Datas em português no MatDatepicker  ****/
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  /**********************************************/        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
