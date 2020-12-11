import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { produtoService } from '../produto.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { tipo_prodService } from 'src/app/tipo_prod/tipo_prod.service';
import { unidadeService } from 'src/app/unidade/unidade.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class produtoFormComponent implements OnInit {

  // Variável para armazenar os dados do registro
  produto : any = {}  // Objeto vazio, nome no SINGULAR
  tipo_prod : any = []
  unidCad : any = []

  title : string = 'Novo produto'

  constructor(
    private produtoSrv : produtoService,
    private snackBar : MatSnackBar,
    private location : Location,
    private actRoute : ActivatedRoute,
    private tipo_prodSrv : tipo_prodService,
    private unidCadSrv : unidadeService
  ) { }

  async ngOnInit() {
      
    this.carregarDados()

    // Verifica se existe o parâmetro id na URL (rota)
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Acionar o back-end para buscar esse registro
        // e disponibilizá-lo para edição        
        this.produto = await this.produtoSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando produto'
      }
      catch(erro) {
        console.log('erro 1 ->', erro)
        this.snackBar.open('ERRO: não foi possível carregar dados para edição.',
          'Que pena!', { duration: 5000 })
      }
    }
  }

   async carregarDados() {
    try {
      this.tipo_prod = await this.tipo_prodSrv.listar()
      this.unidCad = await this.unidCadSrv.listar()
      
      console.log('unidCad -> ', this.unidCad)
    
    }
    catch(erro) {
      console.log('erro2 ->', erro)
      this.snackBar.open(`ERRO: não foi possível carregar todos os dados 
        necessários para a página.`, 'Que pena', { duration: 5000 })
    }
  }

  async salvar(form: NgForm) {
    if(form.valid) {
      try {
        // 1) Salvar os dados no back-end
        // Se o produto já existir (caso de edição), ele já terá
        // o atributo _id
        if(this.produto._id) {
          await this.produtoSrv.atualizar(this.produto) // Atualização
        }
        else {
          await this.produtoSrv.novo(this.produto)
        }
        // 2) Dar o feedback para o usuário
        this.snackBar.open('Dados salvos com sucesso.', 'Entendi',
          { duration: 5000 })
        // 3) Voltar ao componente de listagem
        this.location.back()
      }
      catch (erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível salvar os dados.', 'Que pena!',
          { duration: 5000 })
      }
      
    }
  }

  voltar(form: NgForm) {
    let result = true
    // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if(form.dirty && form.touched) {
      result = confirm('Há dados não salvos. Deseja realmente voltar?')
    }

    if(result) this.location.back()

  }

}
