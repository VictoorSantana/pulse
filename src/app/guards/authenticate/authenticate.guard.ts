//#region Imports

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

//#endregion

/**
 * A classe que representa o guard que lida com a autenticação do APP
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticateGuard implements CanActivate {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly router: Router,
  ) { }

  //#endregion

  /**
   * Método que diz se deve ativar a rota ou não
   */
  public async canActivate(route: ActivatedRouteSnapshot, _: RouterStateSnapshot) {
    // console.log(window.location.pathname);

    const { unprotectedRoute, protectedRoute, routeToRedirect } = route.data || {};
    const hasToken = await localStorage.getItem('token');

    if((window.location.pathname).split('/').length) {
      const place = (window.location.pathname).split('/')[1];
      if(place === 'criar-senha') {
        return true;
      }
    }

    if (hasToken && protectedRoute) {
      return true;
    }

    if (!hasToken && unprotectedRoute) {
      return true;
    }

    await this.router.navigate([routeToRedirect], { replaceUrl: true });
    return false; 
  }
}


