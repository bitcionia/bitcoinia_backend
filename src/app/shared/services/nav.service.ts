
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { until } from 'protractor';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';


//Menu Bar
export interface Menu {
  headTitle?: string;
  title?: string;
  path?: string;
  icon?: string;
  type?: string;
  badgeClass?: string;
  badgeValue?: string;
  active?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: 'root'
})
export class NavService implements OnDestroy{

  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

  public megaMenu: boolean = false;
  public megaMenuCollapse: boolean = window.innerWidth < 1199 ? true : false;
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
  constructor(
    private router: Router
  ) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize').pipe(
      debounceTime(1000),
      takeUntil(this.unsubscriber)
    ).subscribe((evt: any) => {
      this.setScreenWidth(evt.target.innerWidth);
      if (evt.target.innerwidth < 991) {
        this.collapseSidebar = false;
        this.megaMenu = false;
      }

      if (evt.target.innerWidth < 1199) {
        this.megaMenuCollapse = true;
      }
    });
    if (window.innerWidth < 991) {
      this.router.events.subscribe( event => {
        this.collapseSidebar = false;
        this.megaMenu = false;
      })
    }

  }

  private setScreenWidth( width: number ): void{
    this.screenWidth.next(width);
  }

  ngOnDestroy(){
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  MENUITEMS: Menu[] = [
    //title
    { headTitle: 'dashboard' },
    {
      path: 'dashboard/dashboard', title: 'Dashboard', type: 'link', icon: 'ti-home',
    },
    {
      path: 'user/userlist', title: 'User', type: 'link', icon: 'ti-user',active: false
    },
    
   
    {
      path: 'charts/Charts', title: 'Analytics', icon: 'ti-bar-chart-alt',active:false,
    },
    {
      title: 'Wallet', icon: 'ti-wallet', type: 'sub', active: false,
      children: [
        { path: '/wallet/crypto-dashboard', title: 'Main Wallet ', type: 'link', },
        { path: '/wallet/accumfund', title: 'Accumulate Fund', type: 'link' },
        { path: '/wallet/subwallet', title: 'Sub Wallet', type: 'link' },
        { path: '/wallet/coldwallet', title: 'Cold Wallet', type: 'link' },
        { path: '/wallet/distwallet', title: 'Distribution Wallet', type: 'link' },
       
      ]
    },
    {
      title: 'Draw',  type: 'sub',icon: 'ti-money', active: false,
      children: [
      {path: 'drawwallet/Drawwallet', title: 'Upcoming Draw', type: 'link',  },
      {
        path: 'draworder/draworderpage', title: 'Previous Draw', type: 'link', 
      },
      ]
    },
    {
      title: 'Payment',  type: 'sub',icon: 'fa fa-money', active: false,
      children: [
      {path: 'payment/withdrawpayment', title: 'WithDraw', type: 'link',  },
      {
        path: 'payment/depositpayment', title: 'Deposit', type: 'link', 
      },
      ]
    },
    // {
    //   path: 'payment/userpayment', title: 'User Payment', type: 'link', icon: 'fa fa-money', 
    // },
   
    {
      path: 'wallet/paytranscation', title: 'Pay Transcation', type: 'link', icon: 'fas fa-receipt', 
    },
    {
      path: 'user/useractive', title: 'Active', type: 'sub', icon: 'mdi mdi-account', 
      children: [
        {
          path: 'user/useractive', title: 'Admin', type: 'link', icon: 'fas fa-toolbox', 
        },
        {
          path: 'user/adminuser', title: 'User ', type: 'link', icon: 'fas fa-toolbox', 
        },
      ]
    },
    {
      path: 'pages/Constant', title: 'Constant page', type: 'link', icon: 'fa fa-address-book', 
    },
    {
      path: 'pages/Extrapage', title: 'Extra page',type: 'sub', icon: 'fa fa-plus', 
      children: [
        { path: '/pages/backendpage', title: 'How to play backend', type: 'link' },
        { path: '/pages/creditpage', title: 'How to Add Credit', type: 'link' },
        // { path: '/pages/faqs', title: 'FAQS', type: 'link' },
        { path: '/pages/withdrawpage', title: 'How to Withdraw', type: 'link' },
      ]
    },
    {
      path: 'pages', title: 'Setting page', type: 'sub', icon: 'fas fa-cogs', 
      children: [
        {
          path: 'pages/security', title: 'Security', type: 'link', icon: 'fas fa-lock-open', 
        },
        {
          path: 'pages/Settingpage', title: 'System ', type: 'link', icon: 'fas fa-toolbox', 
        },
        {
          path: 'pages/getlog', title: 'Log ', type: 'link', icon: 'fas fa-toolbox', 
        },
        
      ]
    },
  
  
  ];

 

  //array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
