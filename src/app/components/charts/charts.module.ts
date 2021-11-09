import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApexComponent } from './apex/apex.component';
import { ChartlistComponent } from './chartlist/chartlist.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { EchartComponent } from './echart/echart.component';
import { ChartsRoutingModule } from './charts-routing.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartistModule } from 'ng-chartist';
import { ChartsComponent } from './charts/charts.component';



@NgModule({
  declarations: [ApexComponent, ChartlistComponent, ChartjsComponent, EchartComponent, ChartsComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgApexchartsModule,
    ChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    ChartistModule
  ]
})
export class ChartModule { }
