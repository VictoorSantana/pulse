

import { Injectable } from '@angular/core';
import { AccountPayload, TransferPayload } from 'src/app/models/payloads/account.payload';
import { LoginPayload } from 'src/app/models/payloads/login.payload';
import { AccountProxy } from 'src/app/models/proxies/account.proxy';
import { LoginProxy } from 'src/app/models/proxies/login.proxy';
import { AccountInteractor } from '../../interactors/account/account.interactor';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  constructor(
    private readonly interactor: AccountInteractor,
  ) { }
  
  public async findAll(): Promise<AccountProxy[] | undefined> {
    const { success, error } = await this.interactor.findAll();
    if (error) throw new Error(error?.error?.message || error.message);      
    return success;
  }

  public async findStatement(): Promise<AccountProxy | undefined> {
    const { success, error } = await this.interactor.findStatement();
    if (error) throw new Error(error?.error?.message || error.message);      
    return success;
  }

  public async create(payload: AccountPayload): Promise<any | undefined> {
    const { success, error } = await this.interactor.create(payload);
    if (error) throw new Error(error?.error?.message || error.message);      
    return success;
  }
  
  public async transfer(payload: TransferPayload): Promise<any | undefined> {
    const { success, error } = await this.interactor.transfer(payload);
    if (error) throw new Error(error?.error?.message || error.message);      
    return success;
  }
  
}