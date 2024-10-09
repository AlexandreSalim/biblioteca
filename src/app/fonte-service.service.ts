import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FonteServiceService {

  // Inicializa com o valor padrão de 16
  private tamanhoFonteSubject = new BehaviorSubject<number>(16);

  // Observable que permite que outros componentes escutem mudanças
  tamanhoFonte$ = this.tamanhoFonteSubject.asObservable();

  // Atualiza o valor do BehaviorSubject
  setTamanhoFonte(valor: number) {
    this.tamanhoFonteSubject.next(valor);
  }


}
