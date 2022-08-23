import { Injectable } from '@angular/core';
import { AccountPayload, TransferPayload } from 'src/app/models/payloads/account.payload';
import { LoginPayload } from 'src/app/models/payloads/login.payload';
import { AccountProxy } from 'src/app/models/proxies/account.proxy';
import { LoginProxy } from 'src/app/models/proxies/login.proxy';
import { AsyncResult } from 'src/app/modules/http-async/models/async-result';
import { HttpAsyncService } from 'src/app/modules/http-async/services/http-async.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AccountInteractor {

    constructor(
        private readonly http: HttpAsyncService,
    ) { }

    public async findAll(): Promise<AsyncResult<AccountProxy[]>> {
        const url = environment.routes.account.base;
        return await this.http.get(url);
    }

    public async findStatement(): Promise<AsyncResult<AccountProxy>> {
        const url = environment.routes.account.statement;
        return await this.http.get(url);
    }


    public async create(payload: AccountPayload): Promise<AsyncResult<any>> {
        const url = environment.routes.account.base;
        return await this.http.post(url, payload);
    }

    public async transfer(payload: TransferPayload): Promise<AsyncResult<any>> {
        const url = environment.routes.account.transfer;
        return await this.http.post(url, payload);
    }

    
}
