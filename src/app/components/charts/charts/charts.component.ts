import { ApexChartData, ApexRandomData, BarData, DonutChartData, PieChartData, RadialBarCircleData, RadialBarCircleMultipleData, StackedBarData } from '../../../shared/data/chart/apex';
import * as Chart from 'chart.js';
import * as chartData from '../../../shared/data/chart/chartjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit,ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexChart,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexMarkers,
  ApexAnnotations,
  ApexStroke
} from "ng-apexcharts";
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/shared/services/http.service';
import { DatePipe } from '@angular/common';
import { Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { lineChartLegend } from '../../../shared/data/chart/chartjs';
import * as echarts from 'echarts';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  annotations: ApexAnnotations;
  colors: any;
  toolbar: any;
  legend: ApexLegend;
  grid: ApexGrid;

};

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})

export class ChartsComponent implements OnInit {
  public RandomData = ApexRandomData;
  public apexData = ApexChartData;
  public barData = BarData;
  // public stackedbarData = StackedBarData;
  // public donutData = DonutChartData;
  // public pieData = PieChartData;
  // public radicalbarData = RadialBarCircleData;
  // public radicalmultipleData = RadialBarCircleMultipleData;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @ViewChild('myCanvas')
  public canvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public chartType: string = 'line';
  public chartData: any[];
  public chartLabels: any[];
  public chartColors: any[];
  public chartOption: any;
  data: any;
  dataa: any;
  amount: number;
  showDatafound: boolean;
  weatherDates: any;
  charts:any= [];
  disdata: any;
  constructor(
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,

    public httpService: HttpService,
  ) {
    
   }

  ngOnInit(): void {
    // //debugger
      let jsonData = {
        wallet:"main"
      }
      this.httpService.wallet_list(jsonData).subscribe(res => {
        this.data=res['data']
         let main = res['data'].map(res => res.amount)
        let count = res['data'].map(res => res.createdAt)
        // let alldates = res['data'].map(res => res.date)
        // let price = res['data'].map(res => res.amount.price)
        console.log(main)
      
       this.chartOptions = {
         
        series: [{
          name: 'Amount',
          data: main,
      },
      
    ],
      colors: ['#705ec8', '#fa057a'],
      chart: {
          height: 300,
          type: 'area'
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth'
      },
      xaxis: {
          type: 'datetime',
          categories:count,
      },
      tooltip: {
          x: {
              format: 'dd/MM/yy HH:mm'
          },
      },
      legend: {
          show: false,
      }
    }
  });
  this.getdisgraph();

  }

  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
  //Line Chart
  public lineChartOptions = chartData.lineChartOptions
  public lineChartLabels = chartData.lineChartLabels
  public lineChartType = chartData.lineChartType
  public lineChartLegend = chartData.lineChartLegend
  public lineChartData = chartData.lineChartData
  public lineChartColors = chartData.lineChartColors


  // Bar Chart 1
  public barChartOptions = chartData.barChartOptions;
  public barChartLabels = chartData.barChartLabels;
  public barChartType = chartData.barChartType;
  public barChartLegend = chartData.barChartLegend;
  public barChartPlugins = chartData.barChartPlugins;
  public barChartData = chartData.barChartData;
  public barChartColors = chartData.barchart2Colors;


  //Bar Chart 2
 
  
 
  
 
  getdisgraph(){
    let jsonData = {
      wallet:"sub_wallet"
    }
    this.httpService.wallet_list(jsonData).subscribe(res => {
      this.disdata=res['data']
       let maisn = res['data'].map(res => res.amount)
      let alldates = res['data'].map(res => res.createdAt)
    this.weatherDates=alldates
var datePipe = new DatePipe('en-US');
      let weatherDates = []
      alldates.forEach((res) => {
              let formatedDate = datePipe.transform(res, ' MMM-d-yy');
                      weatherDates.push(formatedDate)

        console.log(maisn)

      })
    //   this.chartData = [{
    //     data: maisn,
    //     label: 'Amount',
    //     fill: false
    //   }];
    //   this.chartLabels = weatherDates ;
    //   this.chartColors = [{
    //     backgroundColor: '#9877f9',
    //     borderColor: '#9877f9',
    //     pointBackgroundColor: '#ffffff',
    //   }];
    //   this.chartOption = {
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true,
    //           stepSize: 1
    //         }
    //       }]
    //     },
    //     annotation: {
    //        drawTime: 'beforeDatasetsDraw',
    //        annotations: [{
    //           type: 'box',
    //           id: 'a-box-1',
    //           yScaleID: 'y-axis-0',
    //           yMin: 0,
    //           yMax: 1,
    //           backgroundColor: '#bdbdca'
    //        }, {
    //           type: 'box',
    //           id: 'a-box-2',
    //           yScaleID: 'y-axis-0',
    //           yMin: 1,
    //           yMax: 2.7,
    //           backgroundColor: '#bdbdca'
    //        }, {
    //           type: 'box',
    //           id: 'a-box-3',
    //           yScaleID: 'y-axis-0',
    //           yMin: 2.7,
    //           yMax: 5,
    //           backgroundColor: '#bdbdca'
    //        }]
    //     }
      
    // };


});
  }
}
