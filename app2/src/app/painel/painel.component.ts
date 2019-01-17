import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase} from '../shared/frase.model';
import { FRASES } from './frases-mock';
import { from } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit, OnDestroy {
  public frases: Frase [] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = "";
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso:number = 0;
  public tentativas:number = 3;
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
      this.atualizaRodada();
      console.log(this.rodadaFrase);
   }

  ngOnInit() {
  }
  ngOnDestroy() {
   console.log ("Componente PAINEL foi Destruído!");
  }
  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
   // console.log (this.resposta);
    }
  public verificarResposta(): void {
   // console.log ('verificar resposta', this.resposta);
   // trocar pergunta da rodada
   console.log ("TENTATIVAS"+this.tentativas);
   if (this.rodadaFrase.frasePtBr == this.resposta) {
     alert("OK, a tradução está correta!" + this.rodadaFrase.frasePtBr);
    this.rodada ++;
    console.log ('numero da rodada', this.rodada);
    // progresso
    this.progresso = this.progresso + (100 / this.frases.length) ;
    // Verificar se rodada já finalizou
    if (this.rodada === 4) {
      alert("Traduções Concluidas com SUCESSO!");
      this.encerrarJogo.emit("vitoria");
    }

    console.log ('progresso', this.progresso);
    this.atualizaRodada();
    console.log ('frase da rodada', this.rodadaFrase);
      } else {
    alert("A tradução Não ESTÁ CORRETA! " + this.rodadaFrase.frasePtBr);
    console.log ('numero da rodada', this.rodada);
    // progresso
    this.progresso = this.progresso;
    console.log ('progresso', this.progresso);
    this.atualizaRodada();
    console.log ('frase da rodada', this.rodadaFrase);
    // Decrementa a variavel tentativas
    this.tentativas --
    if (this.tentativas == -1) {
      alert("Você perdeu todas as tentativas - TENTE NOVAMENTE!");
      this.encerrarJogo.emit("derrota");
          }
    console.log ("TENTATIVAS", this.tentativas);

       }

  }
    public atualizaRodada(): void {
      // define a frase da rodada baseado em alguma lógica
      this.rodadaFrase = this.frases[this.rodada];
      // limpa a tela de resposta
      this.resposta = "";
  }
}
