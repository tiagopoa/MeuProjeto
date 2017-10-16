import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { CrudProdutosService } from "./crud-produtos.service";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: TabelaProdutosComponent },
  { path: 'edicao/:cod', component: FormProdutosComponent },
  { path: 'novo', component: FormProdutosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TabelaProdutosComponent,
    FormProdutosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    RouterModule.forRoot(routes)  
  ],
  providers: [CrudProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
