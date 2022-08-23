//#region Imports

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

//#endregion

//#region Class

/**
 * A classe que representa um serviço responsável por lidar com as chamadas assincronas em um Endpoint
 */
@Injectable({
  providedIn: 'root',
})
export class HttpAsyncService {

  //#region Constructors

  /**
   * Construtor padrão
   *
   * @param http Modulo HTTP
   */
  constructor(
    private readonly http: HttpClient,
  ) {
    this.onAsyncResultError = new Subject<HttpErrorResponse>();
  }

  //#endregion

  //#region Private Properties

  /**
   * Url base para realizar as chamadas
   */
  private baseUrl: string | undefined;

  /**
   * O evento emitido ao ocorrer um erro com a requisição
   */
  private readonly onAsyncResultError: Subject<HttpErrorResponse>;

  /**
   * O método que realiza validações antes de executar uma requisição
   */
  private beforeValidations: (() => Promise<AsyncResult<any>>) | undefined;

  /**
   * O método que retorna alguns HTTP Header a serem adicionados
   */
  private loadHeaders: (() => Promise<HttpHeaders | undefined>) | undefined;

  //#endregion

  //#region Public Methods

  /**
   * Método que retorna o Http nativo
   */
  public getNativeHttp(): HttpClient {
    return this.http;
  }

  /**
   * Método que seta uma validação a ser executado antes de cada requisição
   */
  public setBeforeValidations(beforeValidation: () => Promise<AsyncResult<any>>): void {
    this.beforeValidations = beforeValidation;
  }

  /**
   * Método que seta uma validação a ser executado antes de cada requisição
   */
  public setLoadHeaders(loadHeader: () => Promise<HttpHeaders | undefined>): void {
    this.loadHeaders = loadHeader;
  }

  /**
   * Método que retorna o evento chamado ao ocorrer um erro com a chamada API
   */
  public getOnAsyncResultError(): Observable<HttpErrorResponse> {
    return this.onAsyncResultError.asObservable();
  }

  /**
   * Método que define uma nova base de url para as chamadas
   *
   * @param newBaseUrl O novo url
   */
  public setBaseUrl(newBaseUrl: string): void {
    this.baseUrl = newBaseUrl;
  }

  //#endregion

  //#region Private Methods

  /**
   * Converte um resultado para AsyncResult para quando der certo
   *
   * @param result O resultado obtido
   */
  private success<T>(result: T): AsyncResult<T> {
    return {
      success: result,
    } as AsyncResult<T>;
  }

  /**
   * Encapsula o erro no AsyncResult
   *
   * @param error O erro enviado pelo servidor
   */
  private error<T>(error: HttpErrorResponse): AsyncResult<T> {
    this.onAsyncResultError.next(error);

    return {
      error,
    } as AsyncResult<T>;
  }

  /**
   * Método que obtém os headers
   */
  private async getHeaders(): Promise<{ headers: HttpHeaders } | undefined> {
    if (this.loadHeaders === undefined) {
      return undefined;
    }

    const result = await this.loadHeaders();

    if (result === undefined) {
      return undefined;
    }

    return { headers: result };
  }

  //#endregion

  //#region Async Restfull Methods

  /**
   * Envia uma requisição com o método GET de forma assincrona
   *
   * @param url Url para a requisição. Obs: Ele já é automaticamente combinado com a url base
   */
  public async get<T>(
    url: string,
  ): Promise<AsyncResult<T>> {

    const headers = await this.getHeaders();

    return await this.http.get<T>(url, headers).toPromise()
      .then((data: T) => {
        return this.success(data);
      })
      .catch((error: HttpErrorResponse) => {
        return this.error<T>(error);
      })
      .then<AsyncResult<T>>((result: AsyncResult<T>) => {
        return result;
      });
  }

  /**
   * Envia uma requisição com o método POST
   *
   * @param url Url para a requisição. Obs: Ele já é automaticamente combinado com a url base
   * @param payload Informações a serem enviadas para o servidor
   * @param removeBaseUrl say if don't need the base url
   */
  public async post<T>(
    url: string,
    payload: object,
    removeBaseUrl?: boolean,
  ): Promise<AsyncResult<T>> {

    const headers = await this.getHeaders();

    return await this.http.post<T>(removeBaseUrl ? url : url, payload, headers).toPromise()
      .then((data: T) => {
        return this.success(data);
      })
      .catch((error: HttpErrorResponse) => {
        return this.error<T>(error);
      })
      .then<AsyncResult<T>>((result: AsyncResult<T>) => {
        return result;
      });
  }

  /**
   * Envia uma requisição com o método PUT
   *
   * @param url Url para a requisição. Obs: Ele já é automaticamente combinado com a url base
   * @param payload Informações a serem enviadas para o servidor
   */
  public async put<T>(
    url: string,
    payload: object,
  ): Promise<AsyncResult<T>> {

    const headers = await this.getHeaders();

    return await this.http.put<T>(url, payload, headers).toPromise()
      .then((data: T) => {
        return this.success(data);
      })
      .catch((error: HttpErrorResponse) => {
        return this.error<T>(error);
      })
      .then<AsyncResult<T>>((result: AsyncResult<T>) => {
        return result;
      });
  }

  /**
   * Envia uma requisição com o método DELETE
   *
   * @param url Url para a requisição. Obs: Ele já é automaticamente combinado com a url base
   */
  public async delete<T>(
    url: string,
  ): Promise<AsyncResult<T>> {

    const headers = await this.getHeaders();

    return await this.http.delete<T>(url, headers).toPromise()
      .then((data: T) => {
        return this.success(data);
      })
      .catch((error: HttpErrorResponse) => {
        return this.error<T>(error);
      })
      .then<AsyncResult<T>>((result: AsyncResult<T>) => {
        return result;
      });
  }

  //#endregion

  //#region sama methods

  public async getFileSize(url: string): Promise<AsyncResult<string>> {
    return await this.http.head(url, {
      observe: 'response',
    }).toPromise()
      .then((data) => {
        const length = data.headers.get('content-length');
        return this.success((+(length || 0) / 1024 / 1024).toFixed(2));
      })
      .catch((error: HttpErrorResponse) => {
        return this.error(error);
      })
      .then<AsyncResult<any>>((result: AsyncResult<any>) => {
        return result;
      });
  }

  //#endregion

}

//#endregion

//#region Interfaces

/**
 * A interface que representa um resultado obtido de forma assincrona
 */
export interface AsyncResult<T> {

  /**
   * O resultado quando ocorre tudo certo
   */
  success?: T;

  /**
   * O resultado quando dá algum problema
   */
  error?: HttpErrorResponse;

}

//#endregion
