import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentTranscationComponent } from './payment-transcation/payment-transcation.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { OrderModule } from 'ngx-order-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PaymentTranscationComponent],
  imports: [
    CommonModule,
    PaymentTranscationModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    // OrderModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class PaymentTranscationModule { }
