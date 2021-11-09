import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { DrawwalletComponent } from './drawwallet/drawwallet.component';
import { DrawWalletRoutingModule } from './drawwallet-routing.module';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AdddrawComponent } from './adddraw/adddraw.component';
import { ViewdrawComponent } from './viewdraw/viewdraw.component';
import { EditdrawComponent } from './editdraw/editdraw.component';
import { DeletedrawComponent } from './deletedraw/deletedraw.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PercentageDirective } from './percentage.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";

import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  
  declarations: [DrawwalletComponent, AdddrawComponent, ViewdrawComponent, EditdrawComponent, DeletedrawComponent, PercentageDirective,],
  imports: [

    CommonModule,
  DrawWalletRoutingModule,
    ChartsModule,
    NgApexchartsModule,
    NgSelectModule,
    NgbModule,
    MatDatepickerModule,
    ClipboardModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule, 
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    MatDialogModule,
    
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000
      }
    ),
  ],
  providers: [
    ToastrService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class DrawWalletModule { }
