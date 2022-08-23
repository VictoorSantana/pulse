import { Injectable } from '@angular/core';
import { LoginPayload } from 'src/app/models/payloads/login.payload';
import { LoginProxy } from 'src/app/models/proxies/login.proxy';
import { AsyncResult } from 'src/app/modules/http-async/models/async-result';
import { HttpAsyncService } from 'src/app/modules/http-async/services/http-async.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthInteractor {

    constructor(
        private readonly http: HttpAsyncService,
    ) { }

    public async performLogin(payload: LoginPayload): Promise<AsyncResult<LoginProxy>> {
        const url = environment.routes.auth.login;
        return await this.http.post(url, payload);
    }
}
