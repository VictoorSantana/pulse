import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateGuard } from '../guards/authenticate/authenticate.guard';
import { PulseComponent } from './pulse.component';



/**
 * As configurações para as rotas que NÃO precisam de autenticação
 */
export const unAuthenticatedRoute = {
    canActivate: [AuthenticateGuard],
    data: {
        routeToRedirect: 'painel/dashboard',
        unprotectedRoute: true,
    },
};

/**
 * As configurações para as rotas que PRECISAM de autenticação
 */
export const authenticatedRoute = {
    canActivate: [AuthenticateGuard],
    data: {
        routeToRedirect: 'login',
        protectedRoute: true,
    },
};


const routes: Routes = [
    {
        path: '',
        component: PulseComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
                ...unAuthenticatedRoute
            },
            {
                path: 'painel',
                loadChildren: () => import('./painel/painel.module').then(m => m.PainelModule),
                ...authenticatedRoute
            },
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PulsesRoutingModule { }
