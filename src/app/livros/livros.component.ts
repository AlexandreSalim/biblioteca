import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../livros.service';
import { FonteServiceService } from '../fonte-service.service';


@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.scss'
})
export class LivrosComponent implements OnInit {

  livros: any[] = [];
  tamanhoFonte: number = 16; // Valor inicial

  constructor(private listaLivros: LivrosService, private fonteService: FonteServiceService) {}

  ngOnInit(): void {
    this.livros = this.listaLivros.getlivros();

    // Inscreve-se no BehaviorSubject para escutar mudanças
    this.fonteService.tamanhoFonte$.subscribe((novoTamanho) => {
      this.tamanhoFonte = novoTamanho;
    });
  }
}