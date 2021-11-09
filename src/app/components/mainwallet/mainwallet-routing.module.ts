import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthencationGuard } from 'src/app/shared/services/authencation.guard';
import { AccumulatefundsComponent } from './accumulatefunds/accumulatefunds.component';
import { AddwalletComponent } from './addwallet/addwallet.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { CancelpaymentComponent } from './cancelpayment/cancelpayment.component';
import { ColdpagewalletComponent } from './coldpagewallet/coldpagewallet.component';
import { CryptoDashboardComponent } from './crypto-dashboard/crypto-dashboard.component';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { DistpagewalletComponent } from './distpagewallet/distpagewallet.component';
import { InactivepaymentComponent } from './inactivepayment/inactivepayment.component';
import { MarketcapComponent } from './marketcap/marketcap.component';
import { PaymentTranscationComponent } from './paytranscation/payment-transcation/payment-transcation.component';
import { SubwalletComponent } from './subwallet/subwallet.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { WalletComponent } from './wallet/wallet.component';


const routes: Routes = [
  {
    path: '',
    canActivate:[AuthencationGuard],

    children: [
      // {
      //   path: 'buy-sell',
      //   component: BuySellComponent
      // },
      {
        path: 'crypto-dashboard',
        component: CryptoDashboardComponent
      },
      // {
      //   path: 'currency-exchange',
      //   component: CurrencyExchangeComponent
      // },
      // {
      //   path: 'marketcap',
      //   component: MarketcapComponent
      // },
      // {
      //   path: 'transactions',
      //   component: TransactionsComponent
      // },
      {
        path: 'coldwallet',
        component: ColdpagewalletComponent
      },
      {
        path: 'distwallet',
        component: DistpagewalletComponent
      },
      {
        path: 'paytranscation',
        component: PaymentTranscationComponent
      },
      {
        path: 'accumfund',
        component: AccumulatefundsComponent
      },
      {
        path: 'subwallet',
        component: SubwalletComponent
      },
      {
        path: 'inactivepayment',
        component: InactivepaymentComponent
      },
      {
        path: 'cancelpayment',
        component: CancelpaymentComponent
      },
      {
        path: 'addwallet',
        component: AddwalletComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainwalletRouting { }