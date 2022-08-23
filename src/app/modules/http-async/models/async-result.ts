//#region Imports

import { HttpErrorResponse } from '@angular/common/http';

//#endregion


export interface MessageResult {
  tipo: number;
  valor: string;
}

/**
 * A interface que representa um resultado obtido de forma assincrona
 */
export interface AsyncResult<T> {

  /**
   * O resultado quando ocorre tudo certo
   */
   success?: T;

   /**
    * O resultado quando dรก algum problema
    */
   error?: HttpErrorResponse;

}
