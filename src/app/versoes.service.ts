import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VersoesService {


  versoes = [
    {versoes: 'versoes 1', id: '1'},
    {versoes: 'versoes 2', id: '2'},
    {versoes: 'versoes 3', id: '3'},
    {versoes: 'versoes 4', id: '4'},
    {versoes: 'versoes 5', id: '5'},
    {versoes: 'versoes 6', id: '6'},
    {versoes: 'versoes 7', id: '7'},
    {versoes: 'versoes 8', id: '8'},
    {versoes: 'versoes 9', id: '9'},
    {versoes: 'versoes 10', id: '10'},
  ];

  constructor() { }

  getversoes(){
    return this.versoes;
  }

}
