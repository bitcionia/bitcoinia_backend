import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SuccessmessageComponent } from './successmessage/successmessage.component';
import { DangermessageComponent } from './dangermessage/dangermessage.component';
import { WarningmessageComponent } from './warningmessage/warningmessage.component';
import { EmptypageComponent } from './emptypage/emptypage.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap'
import { PageMsgRoutingModule } from './page-msg-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConstantpageComponent } from './constantpage/constantpage.component';
import { ExtrapageComponent } from './extrapage/extrapage.component';
import { SettingpageComponent } from './settingpage/settingpage.component';
import { SystemsettingpageComponent } from './systemsettingpage/systemsettingpage.component';
import { ChangepasspageComponent } from './changepasspage/changepasspage.component';
import { EmailpageComponent } from './emailpage/emailpage.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BackendpageComponent } from './backendpage/backendpage.component';
import { CreditpageComponent } from './creditpage/creditpage.component';
import { DocspageComponent } from './docspage/docspage.component';
import { WithdrawpageComponent } from './withdrawpage/withdrawpage.component';
import { QualificationpageComponent } from './qualificationpage/qualificationpage.component';
import { DocumentpageComponent } from './documentpage/documentpage.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ClipboardModule } from 'ngx-clipboard';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { GetlogComponent } from './getlog/getlog.component';
import { DeletelogComponent } from './deletelog/deletelog.component';
import { CreatewithdrawComponent } from './createwithdraw/createwithdraw.component';
import { ViewwithdrawComponent } from './viewwithdraw/viewwithdraw.component';
import { EditwithdrawComponent } from './editwithdraw/editwithdraw.component';
// import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import {NgxPaginationModule} from 'ngx-pagination';
import { AddcreditComponent } from './addcredit/addcredit.component';
import { EditcreditComponent } from './editcredit/editcredit.component';
import { EditbackendComponent } from './editbackend/editbackend.component';
import { AddbackendComponent } from './addbackend/addbackend.component';
import { ViewbackendComponent } from './viewbackend/viewbackend.component';
import { ViewcreditComponent } from './viewcredit/viewcredit.component';
import { SecuritypageComponent } from './securitypage/securitypage.component';
import { GoogleAuthenticatorComponent } from './google-authenticator/google-authenticator.component'; // <-- import the module
import { ArchwizardModule } from 'angular-archwizard';
import { SmspageComponent } from './smspage/smspage.component';
import { RemovegoogleauthComponent } from './removegoogleauth/removegoogleauth.component';
import { AngularOtpLibModule } from 'angular-otp-box';
import { PervdrawPdfComponent } from './pervdraw-pdf/pervdraw-pdf.component';
import { WithdrawsucessPdfComponent } from './withdrawsucess-pdf/withdrawsucess-pdf.component';
import { WithdrawpendPdfComponent } from './withdrawpend-pdf/withdrawpend-pdf.component';
import { WithdrawcanPdfComponent } from './withdrawcan-pdf/withdrawcan-pdf.component';
import { DepositcanPdfComponent } from './depositcan-pdf/depositcan-pdf.component';
import { DepositpenPdfComponent } from './depositpen-pdf/depositpen-pdf.component';
import { DepositsucessPdfComponent } from './depositsucess-pdf/depositsucess-pdf.component';
import { TranscationPdfComponent } from './transcation-pdf/transcation-pdf.component';
import { TranscationpenPdfComponent } from './transcationpen-pdf/transcationpen-pdf.component';
import { TranscationcanPdfComponent } from './transcationcan-pdf/transcationcan-pdf.component';


@NgModule({
  declarations: [ProfileComponent, InvoiceComponent, PricingComponent, GalleryComponent, FaqsComponent, SuccessmessageComponent, DangermessageComponent, WarningmessageComponent, EmptypageComponent, ConstantpageComponent, ExtrapageComponent, SettingpageComponent, SystemsettingpageComponent, ChangepasspageComponent, EmailpageComponent, BackendpageComponent, CreditpageComponent, DocspageComponent, WithdrawpageComponent, QualificationpageComponent, DocumentpageComponent, GetlogComponent, DeletelogComponent, CreatewithdrawComponent, ViewwithdrawComponent, EditwithdrawComponent, AddcreditComponent, EditcreditComponent, EditbackendComponent, AddbackendComponent, ViewbackendComponent, ViewcreditComponent, SecuritypageComponent, GoogleAuthenticatorComponent, SmspageComponent, RemovegoogleauthComponent, PervdrawPdfComponent, WithdrawsucessPdfComponent, WithdrawpendPdfComponent, WithdrawcanPdfComponent, DepositcanPdfComponent, DepositpenPdfComponent, DepositsucessPdfComponent, TranscationPdfComponent, TranscationpenPdfComponent, TranscationcanPdfComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PageMsgRoutingModule,
    NgbModule,
    Ng2SearchPipeModule,
    // OrderModule,
    ArchwizardModule,
    ClipboardModule,
    NgxPaginationModule,
    GalleryModule.forRoot(),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    HttpClientModule,
    CarouselModule,
    MatDialogModule,
    AngularEditorModule,
    AngularOtpLibModule,
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

  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
export class PagesModule { }
