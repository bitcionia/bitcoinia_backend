import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthencationGuard } from 'src/app/shared/services/authencation.guard';
import { ForgetComponent } from './forget/forget.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { ResetComponent } from './reset/reset.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SmsotpComponent } from './smsotp/smsotp.component';
import { TwofactorComponent } from './twofactor/twofactor.component';


const routes: Routes = [
  {
    path: '',

    children: [
      
      {
        path: 'forgot-password',
        component: ForgetComponent
      },
      {
        path: 'lockscreen',
        component: LockscreenComponent
      },
      {
        path: 'reset-password',
        component: ResetComponent
      },
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'twofactor',
        component: TwofactorComponent
      },
      {
        path: 'smsotp',
        component: SmsotpComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomRoutingModule  { }