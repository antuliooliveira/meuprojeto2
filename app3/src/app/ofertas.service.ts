import {Injectable, inject} from '@angular/core';
import {Oferta} from './shared/oferta.model';
import { Http } from '@angular/http';

import '../../node_modules/rxjs/add/operator/toPromise';

@Injectable()
export class OfertasService {
constructor(private http: Http) {}

public getOfertas(): Promise <Oferta[]> {
  /* Efetuar uma requisição http e retornar uma "Promise" com um array de Oferta[]*/
   // return this.ofertas;
		return this.http.get('http://localhost:3000/ofertas?destaque=true')
		.toPromise()
    .then((resposta: any) => resposta.json());

}
public getOfertasPorCategoria(categoria: string): Promise <Oferta[]> {
  return this.http.get (`http://localhost:3000/ofertas?categoria=${categoria}`)
  .toPromise()
  .then ((resposta: any) => resposta.json());
}

}
