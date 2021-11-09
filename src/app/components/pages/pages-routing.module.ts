import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthencationGuard } from 'src/app/shared/services/authencation.guard';
import { AddbackendComponent } from './addbackend/addbackend.component';
import { AddcreditComponent } from './addcredit/addcredit.component';
import { BackendpageComponent } from './backendpage/backendpage.component';
import { ChangepasspageComponent } from './changepasspage/changepasspage.component';
import { ConstantpageComponent } from './constantpage/constantpage.component';
import { CreatewithdrawComponent } from './createwithdraw/createwithdraw.component';
import { CreditpageComponent } from './creditpage/creditpage.component';
import { DangermessageComponent } from './dangermessage/dangermessage.component';
import { DeletelogComponent } from './deletelog/deletelog.component';
import { DepositcanPdfComponent } from './depositcan-pdf/depositcan-pdf.component';
import { DepositpenPdfComponent } from './depositpen-pdf/depositpen-pdf.component';
import { DepositsucessPdfComponent } from './depositsucess-pdf/depositsucess-pdf.component';
import { DocumentpageComponent } from './documentpage/documentpage.component';
import { EditwithdrawComponent } from './editwithdraw/editwithdraw.component';
import { EmailpageComponent } from './emailpage/emailpage.component';
import { EmptypageComponent } from './emptypage/emptypage.component';
import { ExtrapageComponent } from './extrapage/extrapage.component';
import { FaqsComponent } from './faqs/faqs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GetlogComponent } from './getlog/getlog.component';
import { GoogleAuthenticatorComponent } from './google-authenticator/google-authenticator.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PervdrawPdfComponent } from './pervdraw-pdf/pervdraw-pdf.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProfileComponent } from './profile/profile.component';
import { QualificationpageComponent } from './qualificationpage/qualificationpage.component';
import { RemovegoogleauthComponent } from './removegoogleauth/removegoogleauth.component';
import { SecuritypageComponent } from './securitypage/securitypage.component';
import { SettingpageComponent } from './settingpage/settingpage.component';
import { SmspageComponent } from './smspage/smspage.component';
import { SuccessmessageComponent } from './successmessage/successmessage.component';
import { SystemsettingpageComponent } from './systemsettingpage/systemsettingpage.component';
import { TranscationPdfComponent } from './transcation-pdf/transcation-pdf.component';
import { TranscationcanPdfComponent } from './transcationcan-pdf/transcationcan-pdf.component';
import { TranscationpenPdfComponent } from './transcationpen-pdf/transcationpen-pdf.component';
import { ViewbackendComponent } from './viewbackend/viewbackend.component';
import { ViewcreditComponent } from './viewcredit/viewcredit.component';
import { ViewwithdrawComponent } from './viewwithdraw/viewwithdraw.component';
import { WarningmessageComponent } from './warningmessage/warningmessage.component';
import { WithdrawcanPdfComponent } from './withdrawcan-pdf/withdrawcan-pdf.component';
import { WithdrawpageComponent } from './withdrawpage/withdrawpage.component';
import { WithdrawpendPdfComponent } from './withdrawpend-pdf/withdrawpend-pdf.component';
import { WithdrawsucessPdfComponent } from './withdrawsucess-pdf/withdrawsucess-pdf.component';


const routes: Routes = [
  {
    path: '',
    canActivate:[AuthencationGuard],

    children: [
      {
        path: 'empty-page',
        component: EmptypageComponent
      },
      {
        path: 'faqs',
        component: FaqsComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'invoice',
        component: InvoiceComponent
      },
      {
        path: 'pervpdf',
        component: PervdrawPdfComponent
      },
      {
        path: 'withdrawsucpdf',
        component: WithdrawsucessPdfComponent
      },
      {
        path: 'withdrawcanpdf',
        component: WithdrawcanPdfComponent
      },
      {
        path: 'withdrawpendpdf',
        component: WithdrawpendPdfComponent
      },
      {
        path: 'depositsucesspdf',
        component: DepositsucessPdfComponent
      },
      {
        path: 'depositpenpdf',
        component: DepositpenPdfComponent
      },
      {
        path: 'depositcanpdf',
        component: DepositcanPdfComponent
      },
      {
        path: 'transcanpdf',
        component:TranscationcanPdfComponent
      }, {
        path: 'transpdf',
        component: TranscationPdfComponent
      }, {
        path: 'transpenpdf',
        component: TranscationpenPdfComponent
      },
      {
        path: 'pricing',
        component: PricingComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'Constant',
        component: ConstantpageComponent
      },
      {
        path: 'Extrapage',
        component: ExtrapageComponent
      },
      {
        path: 'Settingpage',
        component: SettingpageComponent
      },  
      {
        path: 'Systemsetpage',
        component:SystemsettingpageComponent
      },
      {
        path: 'Changepasswpage',
        component:ChangepasspageComponent
      },
      {
        path: 'Emailpage',
        component:EmailpageComponent
      },
      {
      path: 'smspage',
      component:SmspageComponent
    },
      {
        path: 'backendpage',
        component:BackendpageComponent
      },
      {
        path: 'addbackend',
        component:AddbackendComponent
      },{
        path: 'viewbackend',
        component:ViewbackendComponent
      },
      {
        path: 'creditpage',
        component:CreditpageComponent
      },
      {
        path: 'addcredit',
        component:AddcreditComponent
      },
      {
        path: 'viewcredit',
        component:ViewcreditComponent
      },
      {
        path: 'withdrawpage',
        component:WithdrawpageComponent
      },
      {
        path: 'viewwithdraw',
        component:ViewwithdrawComponent
      },
      {
        path: 'editwithdraw',
        component:EditwithdrawComponent
      },
      {
        path: 'createwithdraw',
        component:CreatewithdrawComponent
      },
      {
        path: 'qualification',
        component:QualificationpageComponent
      },
      {
        path: 'documenttype',
        component:DocumentpageComponent
      },
      {
        path: 'getlog',
        component:GetlogComponent
      },
      {
        path: 'deletelog',
        component:DeletelogComponent
      },
      {
        path: 'security',
        component:SecuritypageComponent
      },
      {
        path: 'GoogleAuth',
        component:GoogleAuthenticatorComponent
      },
      {
        path: 'removegoogleauth',
        component:RemovegoogleauthComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  PagesRoutingModule { }