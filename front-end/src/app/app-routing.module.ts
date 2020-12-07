import { TurmaFormComponent } from './turma/turma-form/turma-form.component';
import { TurmaListComponent } from './turma/turma-list/turma-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListComponent } from './curso/curso-list/curso-list.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
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

const routes: Routes = [
    // Nomes de rota no Angular (path) NÃO começam com uma barra 
    { path: 'filial', component: filialListComponent },
    { path: 'filial/novo', component: filialFormComponent },
    { path: 'filial/:id', component: filialFormComponent },

    { path: 'unidade', component: unidadeListComponent },
    { path: 'unidade/novo', component: unidadeFormComponent },
    { path: 'unidade/:id', component: unidadeFormComponent },

    { path: 'tipo_prod', component: tipo_prodListComponent },
    { path: 'tipo_prod/novo', component: tipo_prodFormComponent },
    { path: 'tipo_prod/:id', component: tipo_prodFormComponent },

    { path: 'produto', component: produtoListComponent },
    { path: 'produto/novo', component: produtoFormComponent },
    { path: 'produto/:id', component: produtoFormComponent },

    { path: 'representante', component: representanteListComponent },
    { path: 'representante/novo', component: representanteFormComponent },
    { path: 'representante/:id', component: representanteFormComponent },

    { path: 'cliente', component: clienteListComponent },
    { path: 'cliente/novo', component: clienteFormComponent },
    { path: 'cliente/:id', component: clienteFormComponent },

    { path: 'curso', component: CursoListComponent },
    { path: 'curso/novo', component: CursoFormComponent },
    { path: 'curso/:id', component: CursoFormComponent },

    { path: 'turma', component: TurmaListComponent },
    { path: 'turma/novo', component: TurmaFormComponent },
    { path: 'turma/:id', component: TurmaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
