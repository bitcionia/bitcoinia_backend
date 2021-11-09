import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthencationGuard } from 'src/app/shared/services/authencation.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopupdetailsComponent } from './popupdetails/popupdetails.component';


const routes: Routes = [
    {
        path: '',
        canActivate:[AuthencationGuard],

        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'Popup',
                component: PopupdetailsComponent
            }
            
        ],
    },
    
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
