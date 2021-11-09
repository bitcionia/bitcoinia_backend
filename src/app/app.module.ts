import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserIdleModule } from 'angular-user-idle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';

// import { BnNgIdleService } from 'bn-ng-idle'; // import bn-ng-idle service

// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTabsModule,

    NgbModule,MatDatepickerModule,

    RouterModule,
    SharedModule,
    CarouselModule,
    NgxPaginationModule,
    NgxIntlTelInputModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    UserIdleModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000
      }
    ),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [], // add it to the providers of your module
  bootstrap: [AppComponent],
})
export class AppModule { }
