import { Component, OnInit } from '@angular/core';
import { cryptoDashboard } from 'src/app/shared/data/crypto-dash';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as chartData from "../../../shared/data/crypto-dash";
import { ActivatedRoute, Router } from '@angular/router';
import { DataTable2, SimpleDataTable } from 'src/app/shared/data/tables/data-table';
import { DataTable } from 'simple-datatables';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/shared/services/http.service';
@Component({
  selector: 'app-subwallet',
  templateUrl: './subwallet.component.html',
  styleUrls: ['./subwallet.component.scss']
})
export class SubwalletComponent implements OnInit {

  cryptoDashdata = cryptoDashboard;
  customOptions: OwlOptions
  public simpleData = SimpleDataTable;
  public tableData = DataTable2;
  dataTable1:any=[];
  p: number[] = [];
  showDatafound: boolean;
  chart:any= [];
  dataa: any;
  id: any;
  amount: number = 0;
  data: any;
  bal: any;
  constructor(
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,

    public httpService: HttpService,  ) { }

  ngOnInit(): void {
    this.wallet_list();
    this.httpService.walletbal().subscribe((res: any) => {
      this.bal = res['data']['sub_wallet']
      console.log(this.bal);

    });
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
//  let dataTable1 = new DataTable("#myTable1", {
//     searchable: false,
//     fixedHeight: true,
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


  // owlCarouselData = [
  //   { id: 1, img: '../../assets/img/users/5.jpg', name: 'Reynante', designation: 'Web Developer'},
  //   { id: 2, img: '../../assets/img/users/4.jpg', name: 'Joyce Chua', designation: 'Team Leader'},
  //   { id: 3, img: '../../assets/img/users/6.jpg', name: 'Owen Bongcaras', designation: 'Web Designer'},
  //   { id: 4, img: '../../assets/img/users/7.jpg', name: 'Mariane Galeon', designation: 'Php Developer'},
  //   { id: 5, img: '../../assets/img/users/8.jpg', name: 'Reynante', designation: 'Web Developer'},
  //   { id: 6, img: '../../assets/img/users/9.jpg', name: 'Joyce Chua', designation: 'Team Leader'},
  //   { id: 7, img: '../../assets/img/users/10.jpg', name: 'Owen Bongcaras', designation: 'Web Designer'},
  //   { id: 8, img: '../../assets/img/users/11.jpg', name: 'Mariane Galeon', designation: 'Php Developer'},

  // ]

 
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
  wallet_list(){
    let jsonData = {
      wallet:"sub"
    }
    this.httpService.wallet_list(jsonData).subscribe(res => {
      this.data=res['data']
      console.log(this.data)
      
      for(let idx of this.data){
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
}
