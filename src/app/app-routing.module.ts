import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './livros/livros.component';
import { Livro1Component } from './livro1/livro1.component';
import { Livro2Component } from './livro2/livro2.component';
import { VersoesComponent } from './versoes/versoes.component';

const routes: Routes = [
  {path: '', component: LivrosComponent},
  {path: 'livros/1', component: Livro1Component},
  {path: 'livros/2', component: Livro2Component},
  {path: 'versoes', component: VersoesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
