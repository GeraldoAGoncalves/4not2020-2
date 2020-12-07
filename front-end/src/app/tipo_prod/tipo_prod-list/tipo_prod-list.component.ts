import { Component, OnInit } from '@angular/core';
import { tipo_prodService } from '../tipo_prod.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tipo_prod-list',
  templateUrl: './tipo_prod-list.component.html',
  styleUrls: ['./tipo_prod-list.component.scss']
})
export class tipo_prodListComponent implements OnInit {

  // Nome da entidade no plural
  tipo_prods : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['cod_tp_prod', 'descricao', 'unidade', 'data', 'editar', 'excluir']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private tipo_prodSrv : tipo_prodService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.tipo_prods = await this.tipo_prodSrv.listar()
    console.log(this.tipo_prods)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.tipo_prodSrv.excluir(id)
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
