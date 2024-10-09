import { Component, Renderer2 } from '@angular/core';
import { FonteServiceService } from '../fonte-service.service';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.scss'
})
export class DialogoComponent {

  p: number | null = null;
  sc: number | null = null;
  tamanhoFonte: number = 16;

  constructor(private fonteService: FonteServiceService, private renderer: Renderer2){}


  selecionarP(numero: number) {
    this.p = numero;
  }

  salvarOUcancelar(numero: number) {
    this.sc = numero;
    if (numero === 2) {  // Se "Salvar" for clicado
      this.fonteService.setTamanhoFonte(this.tamanhoFonte); // Armazena o valor no serviço
    }
  }

  onInputChange(event: any): void {
    const novoValor = event.value || event.target.value;
    this.tamanhoFonte = novoValor;  
  }

  toggleModoNoturno(event: any){
    const isChecked = event.target.checked;

    
    if (isChecked) {
      // Modo noturno: troca a cor de fundo para preto e o texto para branco
      this.renderer.setStyle(document.body, 'background-color', 'black');
      this.renderer.setStyle(document.body, 'color', 'white');
    } else {
      // Modo claro: troca a cor de fundo para branco e o texto para preto
      this.renderer.setStyle(document.body, 'background-color', 'white');
      this.renderer.setStyle(document.body, 'color', 'black');
    }
    
  }

}
