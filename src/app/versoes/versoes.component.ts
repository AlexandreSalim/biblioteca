import { Component, OnInit } from '@angular/core';
import { FonteServiceService } from '../fonte-service.service';
import { VersoesService } from '../versoes.service';

@Component({
  selector: 'app-versoes',
  templateUrl: './versoes.component.html',
  styleUrls: ['./versoes.component.scss']
})
export class VersoesComponent implements OnInit {

  tamanhoFonte = 16;
  versao: string | null = null;  // Pode ser string já que os IDs são strings
  arrayVersao: any[] = [];

  constructor(private fonteService: FonteServiceService, private versoesService: VersoesService) {}

  selecionarVersao(id: string) {
    this.versao = id; // Atualiza o valor com o ID da versão clicada
  }

  ngOnInit() {
    // Carrega as versões disponíveis do serviço
    this.arrayVersao = this.versoesService.getversoes();

    // Inscreve-se para alterações no tamanho da fonte
    this.fonteService.tamanhoFonte$.subscribe((novoTamanho) => {
      this.tamanhoFonte = novoTamanho;
    });
  }
}
