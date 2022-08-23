import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const baseUrl = environment.baseUrl;

        if (!baseUrl) {
            console.warn('Você incluiu o Interceptor para adicionar um url base mas deve ter esquecido de configurar o url base no módulo.');
            return next.handle(req);
        }

        const token = localStorage.getItem('token');

        if(req.url.includes('http')) {
            req = req.clone({
                url: `${req.url}`
            });
        } else {
            if (token) {
                req = req.clone({
                    url: `${baseUrl}${req.url}`,
                    setHeaders: {
                        Authorization: 'Bearer ' + token,
                        // 'content-type': 'application/x-www-form-urlencoded'
                    }
                });
            } else {
                req = req.clone({
                    url: `${baseUrl}${req.url}`
                });
            }
        }
        

        return next.handle(req);

    }
}