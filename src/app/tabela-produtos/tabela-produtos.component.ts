import { Component, OnInit } from '@angular/core';
import { Produtos } from "../produto";
import { CrudProdutosService } from "../crud-produtos.service";

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  titulo = "Tabela de Produtos";
  produtos:Produtos[]=[];
  
  constructor(private servico:CrudProdutosService) { }

  ngOnInit() {
    this.produtos = this.servico.getProdutos();
  }

  remover(produto:Produtos){
    this.servico.removerProduto(produto);
  }

}
