

import { Injectable } from '@angular/core';
import { LoginPayload } from 'src/app/models/payloads/login.payload';
import { LoginProxy } from 'src/app/models/proxies/login.proxy';
import { AuthInteractor } from '../../interactors/auth/auth.interactor';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  constructor(
    private readonly interactor: AuthInteractor,
  ) { }
  
  public async performLogin(loginPayload: LoginPayload): Promise<LoginProxy | undefined> {
    const { success, error } = await this.interactor.performLogin(loginPayload);

    if (error) throw new Error(error?.error?.message || error.message);      
    
    return success;
  }
}