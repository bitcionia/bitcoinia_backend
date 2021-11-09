import { Component, OnInit } from '@angular/core';
import { cryptoDashboard } from 'src/app/shared/data/crypto-dash';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as chartData from "../../../shared/data/crypto-dash";
import { DataTable2, SimpleDataTable } from 'src/app/shared/data/tables/data-table';
import { DataTable } from 'simple-datatables';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-crypto-dashboard',
  templateUrl: './crypto-dashboard.component.html',
  styleUrls: ['./crypto-dashboard.component.scss']
})
export class CryptoDashboardComponent implements OnInit {
  public simpleData = SimpleDataTable;
  public tableData = DataTable2;
  cryptoDashdata = cryptoDashboard;
  customOptions: OwlOptions
  data: any=[];
  p: number[] = [];
  showDatafound: boolean;
  chart:any= [];
  dataa: any;
  id: any;
  amount: number = 0;
  PieChart: any = [];
  bal: any;

  constructor(
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,

    public httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.wallet();
    this.wallet_list();
    this.httpService.walletbal().subscribe((res: any) => {
      this.bal = res['data']['main_wallet']
      console.log(this.bal);

    });
    
    this.PieChart = new Chart('canvas', {
      type: 'doughnut',
        data: {
          datasets: [
            {
              label: 'Amount',
              data: this.data,
              borderWidth: 3,
              backgroundColor: 'transparent',
              borderColor: '#6259ca',
              pointBackgroundColor: '#ffffff',
              pointRadius: 0,
            },
          ]}
        })
    this.customOptions = {
      loop: true,
      autoplay: true,
      slideTransition: 'linear',
      autoplaySpeed: 4900,
      autoplayHoverPause: true,
      smartSpeed: 1000,
      center: true,
      margin: 22,
      dots: false,
      rewind: false,
      lazyLoad: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: true
      },
      992: {
        items: 4,
        nav: true
      },
      1300: {
        items: 5,
        nav: true
      },
      1500: {
        items: 5,
        nav: true
      },
    }
  }
 
}

// ngAfterViewInit() {
//   let dataTable1 = new DataTable("#myTable1", {
//     searchable: false,
//     // fixedHeight: false,
//   });
// }

  //DonutChart using Apex
  public donutApexData = chartData.donutApexData;
  //DonutChartProfile using Apex
  public donutApexProfile = chartData.donutApexProfile;

  //Apex Chart
  public apexData = chartData.apexCryptoData

  //bitcoin line using ApexCharts
  public lineApexChart = chartData.lineApexChart

  //Sparkline using ApexCharts
  public apexSparkline = chartData.apexSparkline;
  public apexSparkline1 = chartData.apexSparkline1;
  public apexSparkline2 = chartData.apexSparkline2;
  public apexSparkline3 = chartData.apexSparkline3;
  public apexSparkline4 = chartData.apexSparkline4;
gotoadd(){
  this.router.navigateByUrl('wallet/addwallet')

  
}

  wallet_list(){
    let jsonData = {
      wallet:"main"
    }
    this.httpService.wallet_list(jsonData).subscribe(res => {
      this.data=res['data']
      console.log(this.data)
      
      for(let idx of this.dataa){
        this.amount+= +idx['amount']
        console.log(this.amount)
        
      }

      if (this.data.length > 0) {
        if (res['success'] == true) {
          this.showDatafound = true;
          // this.searchuser();
  
          // this.httpService.toastr.success(res['message'], '', {
          //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
          // });
        }
      }
    
  
    else {
      this.showDatafound = false;
      console.log("No Data found");
  
    }
    });
  }
  
  wallet(){
    let jsonData = {
      wallet:"main"
    }
    this.httpService.wallet_graph(jsonData).subscribe(res => {
      this.dataa=res['data']
      console.log(this.dataa)

      if (this.dataa.length > 0) {
        if (res['success'] == true) {
          this.showDatafound = true;
          // this.searchuser();
  
          // this.httpService.toastr.success(res['message'], '', {
          //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
          // });
        }
      }
    
  
    else {
      this.showDatafound = false;
      console.log("No Data found");
  
    }
    });
  }
 
}
