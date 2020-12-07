import { Component, OnInit } from '@angular/core';
import { filialService } from '../filial.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-filial-list',
  templateUrl: './filial-list.component.html',
  styleUrls: ['./filial-list.component.scss']
})
export class filialListComponent implements OnInit {

  // Nome da entidade no plural
  filials : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['cnpj', 'razao', 'fantasia', 'endereco', 'cidade', 'email', 'telefone', 'ativo', 'editar', 'excluir']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private filialSrv : filialService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.filials = await this.filialSrv.listar()
    console.log(this.filials)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.filialSrv.excluir(id)
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
