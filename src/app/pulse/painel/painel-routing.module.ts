import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PainelComponent } from './painel.component';

const painelRoutes: Routes = [
    {
        path: '',
        component: PainelComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard', component: DashboardComponent
            },
            {
                path: 'conta', component: AccountComponent
            }
        ]
    }
];



@NgModule({
    imports: [RouterModule.forChild(painelRoutes)],
    exports: [RouterModule]
})
export class PainelRoutingModule { }
