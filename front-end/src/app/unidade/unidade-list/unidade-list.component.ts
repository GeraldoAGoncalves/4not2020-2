import { Component, OnInit } from '@angular/core';
import { unidadeService } from '../unidade.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-unidade-list',
  templateUrl: './unidade-list.component.html',
  styleUrls: ['./unidade-list.component.scss']
})
export class unidadeListComponent implements OnInit {

  // Nome da entidade no plural
  unidades : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['unidade', 'descricao', 'casas_decimais', 'editar', 'excluir']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private unidadeSrv : unidadeService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.unidades = await this.unidadeSrv.listar()
    console.log(this.unidades)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.unidadeSrv.excluir(id)
        // 1) Recarregar os dados da tabela
        this.ngOnInit()
        // 2) Dar feedback para o usuário com mensagem
        this.snackBar.open('Item excluído com sucesso.', 'Entendi', {
          duration: 5000 // 5 segundos
        })
      }
      catch(erro) {
        // 3) Dar feedback de erro para o usuário
        this.snackBar.open('ERRO: não foi possível excluir este item.', 'Que pena!', {
          duration: 5000 // 5 segundos
        })
        console.log(erro)
      }
    }
  }

}
