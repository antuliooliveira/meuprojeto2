import { Component, OnInit } from '@angular/core';
import { Frase} from '../shared/frase.model';
import { FRASES } from './frases-mock';
import { from } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  public frases: Frase [] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string;
  public rodada: number = 0;
  public rodadaFrase: Frase;
  constructor() {
       this.rodadaFrase = this.frases[this.rodada];
    console.log(this.rodadaFrase);
   }

  ngOnInit() {
  }
  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
   // console.log (this.resposta);
    }
  public verificarResposta(): void {
   // console.log ('verificar resposta', this.resposta);
   // trocar pergunta da rodada
   this.rodada ++;
   console.log ('numero da rodada', this.rodada);
   this.rodadaFrase = this.frases [this.rodada];
   console.log ('frase da rodada', this.rodadaFrase);
  }
}
