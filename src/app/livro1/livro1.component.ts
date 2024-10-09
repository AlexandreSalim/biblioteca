import { Component } from '@angular/core';
import { FonteServiceService } from '../fonte-service.service';

@Component({
  selector: 'app-livro1',
  templateUrl: './livro1.component.html',
  styleUrl: './livro1.component.scss'
})
export class Livro1Component {

  tamanhoFonte = 16;
  

  constructor(private fonteService: FonteServiceService){}

  ngOnInit(): void {
    this.fonteService.tamanhoFonte$.subscribe((novoTamanho) => {
      this.tamanhoFonte = novoTamanho;
    })
  }

}
