

import { Injectable } from '@angular/core';
import { UserPayload } from 'src/app/models/payloads/user.payload';
import { UserProxy } from 'src/app/models/proxies/user.proxy';
import { UserInteractor } from '../../interactors/user/user.interactor';

@Injectable({
  providedIn: 'root',
})
export class UserService {


  constructor(
    private readonly interactor: UserInteractor,
  ) { }
  
  public async create(paylaod: UserPayload): Promise<UserProxy | undefined> {
    const { success, error } = await this.interactor.create(paylaod);
    if (error) throw new Error(error?.error?.message || error.message);      
    return success;
  }
}