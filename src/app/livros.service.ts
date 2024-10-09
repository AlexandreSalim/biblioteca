import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  livros = [
    {livros: 'livro 1', id: '1'},
    {livros: 'livro 2', id: '2'},
    {livros: 'livro 3', id: '3'},
    {livros: 'livro 4', id: '4'},
    {livros: 'livro 5', id: '5'},
    {livros: 'livro 6', id: '6'},
    {livros: 'livro 7', id: '7'},
    {livros: 'livro 8', id: '8'},
    {livros: 'livro 9', id: '9'},
    {livros: 'livro 10', id: '10'},
  ];

  constructor() { }

  getlivros(){
    return this.livros;
  }
}
