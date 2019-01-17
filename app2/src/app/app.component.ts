import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 title = 'app2 - Componente Bootstrap';
 public jogoEmAndamento:  boolean = true;
 public tipoEncerramento: string ;
 public encerrarJogo(tipo: string): void {
 this.jogoEmAndamento = false;
 this.tipoEncerramento = tipo;
  console.log (tipo); }
  public reiniciarJogo(): void {
    this.jogoEmAndamento = true
    this.tipoEncerramento = undefined
    }
}
