import { Injectable } from '@angular/core';
import { UserPayload } from 'src/app/models/payloads/user.payload';
import { UserProxy } from 'src/app/models/proxies/user.proxy';
import { AsyncResult } from 'src/app/modules/http-async/models/async-result';
import { HttpAsyncService } from 'src/app/modules/http-async/services/http-async.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UserInteractor {

    constructor(
        private readonly http: HttpAsyncService,
    ) { }

    public async create(payload: UserPayload): Promise<AsyncResult<UserProxy>> {
        const url = environment.routes.users.base;
        return await this.http.post(url, payload);
    }
}
