import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaymentTranscationComponent } from './payment-transcation/payment-transcation.component';




const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'paymentTrans',
        component:PaymentTranscationComponent
      },
      
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentTranscationRoutingModule {


 }
