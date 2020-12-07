import { Component, OnInit } from '@angular/core';
import { RepresentanteService } from '../representante.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-representante-list',
  templateUrl: './representante-list.component.html',
  styleUrls: ['./representante-list.component.scss']
})
export class representanteListComponent implements OnInit {

  // Nome da entidade no plural
  representantes : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['cnpj', 'razao', 'fantasia', 'endereco', 'cidade', 'email', 'telefone', 'editar', 'excluir']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private representanteSrv : RepresentanteService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.representantes = await this.representanteSrv.listar()
    console.log(this.representantes)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.representanteSrv.excluir(id)
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
