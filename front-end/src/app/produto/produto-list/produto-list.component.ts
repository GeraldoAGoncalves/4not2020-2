import { Component, OnInit } from '@angular/core';
import { produtoService } from '../produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table'

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class produtoListComponent implements OnInit {

  // Nome da entidade no plural
  produtos : any = []
  unid : any []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['cod_prod', 'descricao', 'tipo_produto', 'unidade', 'ativo', 'editar', 'excluir']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private produtoSrv : produtoService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.produtos = await this.produtoSrv.listar()
    console.log(this.produtos)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.produtoSrv.excluir(id)
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
