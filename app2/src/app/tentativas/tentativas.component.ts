import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit, OnChanges {
  public coracaoVazio: string = '../../assets/coracao_vazio.png';
  public coracaoCheio: string = '../../assets/coracao_cheio.png';
  @Input() public tentativas: number;

  public coracoes: Coracao[] = [ new Coracao(true), new Coracao(true), new Coracao(true)];
  constructor() {
    console.log (this.coracoes);

   }
   ngOnChanges() {
     // this.tentativas (informação gerenciada pela classe do componente painel)
     // Array de coracoes Coracao[]
     // comparar this.tentativas com this.coracoes.length
     if (this.tentativas !== this.coracoes.length){
       let indice = this.coracoes.length - this.tentativas ;
       // 3 -2 ==> o primeiro é zero (0)
        this.coracoes[indice - 1].cheio = false;
     }

     console.log ('tentativas recebidas do painel:', this.tentativas);
   }
  ngOnInit(){


  }

}
