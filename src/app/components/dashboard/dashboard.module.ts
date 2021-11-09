import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupdetailsComponent } from './popupdetails/popupdetails.component';
import { GraphService } from './graph.service';


// import { MatTabsModule, MatListModule, MatBadgeModule, MatCardModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatSortModule, MatDialogModule, MatSidenavModule, MatTableModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [DashboardComponent, PopupdetailsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule,
    ChartsModule,
    MatDialogModule,
    NgCircleProgressModule.forRoot(),
  ],
  providers: [GraphService],

})
export class DashboardModule { }
