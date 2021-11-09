import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthencationGuard } from 'src/app/shared/services/authencation.guard';
import { AdddrawComponent } from './adddraw/adddraw.component';
import { DeletedrawComponent } from './deletedraw/deletedraw.component';
import { DrawwalletComponent } from './drawwallet/drawwallet.component';
import { EditdrawComponent } from './editdraw/editdraw.component';
import { ViewdrawComponent } from './viewdraw/viewdraw.component';


const routes: Routes = [
  {
    path: '',              
      canActivate:[AuthencationGuard],


    children: [
      {
        path: 'Drawwallet',
        component: DrawwalletComponent
      },
      {
        path: 'adddraw',
        component: AdddrawComponent
      },
      {
        path: 'viewdraw',
        component: ViewdrawComponent
      },
      {
        path: 'deletedraw',
        component: DeletedrawComponent
      },
      {
        path: 'editdraw',
        component:EditdrawComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawWalletRoutingModule { }