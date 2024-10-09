import { Component, OnInit } from '@angular/core';
import { FonteServiceService } from '../fonte-service.service';

@Component({
  selector: 'app-livro2',
  templateUrl: './livro2.component.html',
  styleUrl: './livro2.component.scss'
})
export class Livro2Component implements OnInit {

  tamanhoFonte = 16;

  constructor(private fonteService: FonteServiceService){}

  ngOnInit(){
    this.fonteService.tamanhoFonte$.subscribe((novoTamanho) => {
      this.tamanhoFonte = novoTamanho;
    })
  }

}
