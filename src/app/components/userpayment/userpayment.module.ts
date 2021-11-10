import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserpaymentRoutingModule } from './userpayment-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DeletepaymentComponent } from './deletepayment/deletepayment.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { OrderModule } from 'ngx-order-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddpaymentComponent } from './addpayment/addpayment.component';
import { DepositpaymentComponent } from './depositpayment/depositpayment.component';
import { WithdrawpaymentComponent } from './withdrawpayment/withdrawpayment.component';
import { PendingdepositComponent } from './pendingdeposit/pendingdeposit.component';
import { PendingwithdrawComponent } from './pendingwithdraw/pendingwithdraw.component';
import { CanceldepositComponent } from './canceldeposit/canceldeposit.component';
import { CancelwithdrawComponent } from './cancelwithdraw/cancelwithdraw.component';


@NgModule({
  declarations: [DeletepaymentComponent, AddpaymentComponent, DepositpaymentComponent, WithdrawpaymentComponent, PendingdepositComponent, PendingwithdrawComponent, CanceldepositComponent, CancelwithdrawComponent],
  imports: [
    CommonModule,
    UserpaymentRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class UserpaymentModule { }
